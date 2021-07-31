import { SET_GENRES } from "../action-types";

const initialState = { genres: null };

export const genresReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GENRES: {
      return { ...state, genres: payload };
    }

    default: {
      return state;
    }
  }
}
