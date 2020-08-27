import { SET_IS_AUTHENTICATED } from '../Types/sessionTypes'

export const initialState = {
    isAuthenticated: false
  };

export const sessionReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_IS_AUTHENTICATED: {
            return {
              ...state,
              isAuthenticated: action.payload.isAuthenticated,
            };
          }

      default: {
        return state;
      }
    }
  }