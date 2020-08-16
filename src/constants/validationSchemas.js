import * as yup from 'yup';

export const SEARCH_SCHEMA = yup.object().shape({
  searchGnomeText: yup.string(),
});
