import { ADD_COLLECTION } from "../types";

const initialState = {
  collections: ["Классика", "Стивен Кинг", "Разное"],
};

export const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLECTION:
      return { ...state, collections: [...state.collections, action.payload] };
    default:
      return state;
  }
};
