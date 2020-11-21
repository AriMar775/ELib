import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { bookReducer } from "./bookReducer";
import { booksReducer } from "./booksReducer";
import { seriesReducer } from "./seriesReducer";
import { collectionsReducer } from "./collectionsReducer";

export const rootReducer = combineReducers({
  book: bookReducer,
  books: booksReducer,
  series: seriesReducer,
  collections: collectionsReducer,
  form: formReducer,
});
