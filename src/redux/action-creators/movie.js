import {SET_LOADING, SET_MOVIES_DATA } from "../action-types";

export const setMovies = (movies) => ({type: SET_MOVIES_DATA, payload: movies});
export const setLoading = (value) => ({type: SET_LOADING, payload: value});
