import { ADD_SERIES } from "../types";

const initialState = {
  series: ["Королевская кровь", "Ведьмак", "Неночь"],
};

export const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERIES:
      return { ...state, series: [...state.series, action.payload] };
    default:
      return state;
  }
};
