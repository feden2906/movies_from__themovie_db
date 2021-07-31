import { combineReducers } from "redux";

import { genresReducer } from "./genres";
import { moviesReducer } from "./movies";
import { themeReducer } from "./theme";

export const reducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  theme: themeReducer
})
