import React, {createContext, useState} from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';
import {getBrastlewarkData} from '../services';

export const GnomesContext = createContext();

const GnomesProvider = ({children}) => {
  const [brastlewarkGnomes, setBrastlewarkGnomes] = useState(null);
  const loadGnomesData = async () => {
    const gnomesResponse = await getBrastlewarkData();

    console.log(gnomesResponse);
    setBrastlewarkGnomes(gnomesResponse?.data?.Brastlewark ?? null);
  };

  return (
    <GnomesContext.Provider
      value={{
        brastlewarkGnomes,
        loadGnomesData,
      }}>
      {children}
    </GnomesContext.Provider>
  );
};

GnomesProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default GnomesProvider;
