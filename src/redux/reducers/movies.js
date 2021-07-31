import { SET_LOADING, SET_MOVIES_DATA } from "../action-types";

const initialState = { movies: [], isVisible: null, isLoading: false };

export const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MOVIES_DATA: {
      return { ...state, movies: payload.results, page: payload.page, total_pages: payload.total_pages };
    }

    case SET_LOADING: {
      return { ...state, isLoading: payload };
    }

    default: {
      return state;
    }
  }
}
