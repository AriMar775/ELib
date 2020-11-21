import { formValueSelector } from "redux-form";

export const getBook = (state) => state.book.book;

export const getBooks = (state) => state.books.books;

export const getSeries = (state) => state.series.series;

export const getCollections = (state) => state.collections.collections;

export const getFormCover = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "cover");
};

export const getFormSeries = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "series");
};

export const getFormCollection = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "collection");
};

export const getFormCategory = (state) => {
  const formValues = formValueSelector("AddBookForm");
  return formValues(state, "category");
};
