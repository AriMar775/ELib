import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { booksReducer } from "./booksReducer";
import { seriesReducer } from "./seriesReducer";
import { collectionsReducer } from "./collectionsReducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  series: seriesReducer,
  collections: collectionsReducer,
  form: formReducer,
});
