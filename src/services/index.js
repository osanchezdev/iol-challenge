import endpoints from '../api';
import axios from 'axios';

export const getBrastlewarkData = async () => {
  return await axios.get(`${endpoints.brastlewark}`).catch(err => {
    throw new Error(err.response);
  });
};
