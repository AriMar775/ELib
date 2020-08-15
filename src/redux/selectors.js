import { formValueSelector } from "redux-form";

export const getSeries = (state) => state.series.series;

export const getCollections = (state) => state.collections.collections;

export const getFormSeries = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "series");
};

export const getFormCollection = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "collection");
};

export const getFormCover = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "cover");
};

export const getFormCategory = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "category");
};
