import React, {createContext, useState} from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';
import _ from 'lodash';
import {getBrastlewarkData} from '../services';

export const GnomesContext = createContext();

const GnomesProvider = ({children}) => {
  const [brastlewarkGnomes, setBrastlewarkGnomes] = useState(null);
  const [filteredGnomes, setFilteredGnomes] = useState(null);
  const [gnomeDetail, setGnomeDetail] = useState(null);
  const loadGnomesData = async () => {
    const gnomesResponse = await getBrastlewarkData();

    setBrastlewarkGnomes(gnomesResponse?.data?.Brastlewark ?? null);
    setFilteredGnomes(gnomesResponse?.data?.Brastlewark ?? null);
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
    setFilteredGnomes(brastlewarkGnomes);
  };

  const findGnomeByName = nameToFind => {
    if (nameToFind) {
      setGnomeDetail(
        _.find(filteredGnomes, gnome => {
          return gnome.name === nameToFind;
        }),
      );
      return;
    }
    setGnomeDetail(null);
  };

  const filterGnomesByProfession = professionToSearch => {
    if (professionToSearch) {
      setFilteredGnomes(
        _.filter(brastlewarkGnomes, gnome => {
          return _.includes(gnome.professions, professionToSearch);
        }),
      );
      return;
    }
    setFilteredGnomes(brastlewarkGnomes);
  };
  return (
    <GnomesContext.Provider
      value={{
        brastlewarkGnomes,
        filteredGnomes,
        gnomeDetail,
        loadGnomesData,
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
