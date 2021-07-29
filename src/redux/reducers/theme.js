import { CHANGE_THEME } from "../action-types/theme";

const initialState = { theme: null }

export const themeReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_THEME: {
      return { ...state, theme: payload }
    }

    default: {
      return state
    }
  }
}
