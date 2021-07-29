import {combineReducers} from "redux";
import {moviesReducer} from "./movies";
import { genresReducer } from "./genres";
import { themeReducer } from "./theme";

export const reducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  theme: themeReducer
})
