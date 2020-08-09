import { AUTH_FAILURE, AUTH_SUCCESS } from '../Types/sessionTypes'

export const initialState = {
    isAuthenticated: false,
    nick: '',
    message: {},
  };

export const sessionReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_SUCCESS: {
            return {
              ...state,
              isAuthenticated: action.payload.isAuthenticated,
              nick: action.payload.nick,
            };
          }
          case AUTH_FAILURE: {
            return {
              ...state,
            };
          }
      default: {
        return state;
      }
    }
  }