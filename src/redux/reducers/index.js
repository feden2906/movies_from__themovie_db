import {combineReducers} from "redux";
import {moviesReducer} from "./movies";
import { genresReducer } from "./genres";

export const reducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer
})
