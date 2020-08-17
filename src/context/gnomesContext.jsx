import React, {createContext, useState} from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';
import _ from 'lodash';
import {getBrastlewarkData} from '../services';
import {PAGE_STEP} from '../constants';

export const GnomesContext = createContext();

const GnomesProvider = ({children}) => {
  const [brastlewarkGnomes, setBrastlewarkGnomes] = useState(null);
  const [filteredGnomes, setFilteredGnomes] = useState(null);
  const [gnomeDetail, setGnomeDetail] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [errorOnLoad, setErrorOnLoad] = useState(false);
  const [pageLimit, setPageLimit] = useState(PAGE_STEP);
  const [gnomeProfession, setGnomeProfession] = useState(null);

  const loadGnomesData = async () => {
    const isOnline = window.navigator.onLine;
    setIsOnline(isOnline);
    if (isOnline)
      try {
        setErrorOnLoad(false);
        const gnomesResponse = await getBrastlewarkData();
        setBrastlewarkGnomes(gnomesResponse?.data?.Brastlewark ?? null);
        setFilteredGnomes(_.slice(gnomesResponse?.data?.Brastlewark, 0, pageLimit));
        return;
      } catch (error) {
        setErrorOnLoad(true);
        return;
      }
  };

  const loadMoreGnomes = () => {
    setPageLimit(pageLimit + PAGE_STEP);
    gnomeProfession
      ? filterGnomesByProfession(gnomeProfession, pageLimit + PAGE_STEP)
      : setFilteredGnomes(_.slice(brastlewarkGnomes, 0, pageLimit + PAGE_STEP));
  };

  const searchGnomeByName = nameToSearch => {
    if (nameToSearch) {
      setFilteredGnomes(
        _.filter(brastlewarkGnomes, gnome => {
          return gnome.name.includes(nameToSearch);
        }),
      );
      return;
    }

    setPageLimit(PAGE_STEP);
    setFilteredGnomes(_.slice(brastlewarkGnomes, 0, PAGE_STEP));
  };

  const findGnomeByName = async nameToFind => {
    if (_.isEmpty(brastlewarkGnomes)) return;
    if (nameToFind && !_.isEmpty(brastlewarkGnomes)) {
      await setGnomeDetail(
        _.find(brastlewarkGnomes, gnome => {
          return gnome.name === nameToFind;
        }),
      );
      return;
    }
    setGnomeDetail(null);
  };

  const filterGnomesByProfession = (professionToSearch, limit = PAGE_STEP) => {
    if (professionToSearch) {
      setGnomeProfession(professionToSearch);
      setFilteredGnomes(
        _.slice(
          _.filter(brastlewarkGnomes, gnome => {
            return _.includes(gnome.professions, professionToSearch);
          }),
          0,
          limit,
        ),
      );
      return;
    }
    setPageLimit(PAGE_STEP);
    setGnomeProfession(null);
    setFilteredGnomes(_.slice(brastlewarkGnomes, 0, PAGE_STEP));
  };
  return (
    <GnomesContext.Provider
      value={{
        isOnline,
        errorOnLoad,
        brastlewarkGnomes,
        filteredGnomes,
        gnomeDetail,
        loadGnomesData,
        loadMoreGnomes,
        searchGnomeByName,
        findGnomeByName,
        filterGnomesByProfession,
      }}>
      {children}
    </GnomesContext.Provider>
  );
};

GnomesProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default GnomesProvider;
