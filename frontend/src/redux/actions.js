import { ADD_BOOK, ADD_SERIES, ADD_COLLECTION } from "./types";

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function addSeries(Series) {
  return {
    type: ADD_SERIES,
    payload: Series,
  };
}

export function addCollection(colletion) {
  return {
    type: ADD_COLLECTION,
    payload: colletion,
  };
}
