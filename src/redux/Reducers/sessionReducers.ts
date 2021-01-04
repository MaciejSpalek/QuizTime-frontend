import { SessionTypes } from '../Types/sessionTypes';

type SessionState = {
    isAuthenticated: boolean;
    requestStatus: boolean;
    tokenLifeTime: number | null;
};

const initialState: SessionState = {
    isAuthenticated: false,
    requestStatus: true,
    tokenLifeTime: null
  };

export const sessionReducer = (state = initialState, action: any): SessionState => {
    switch (action.type) {
        case SessionTypes.SET_IS_AUTHENTICATED: {
          return {
            ...state,
            isAuthenticated: action.payload
          }
        }

        case SessionTypes.SET_REQUEST_STATUS: {
          return {
            ...state,
            requestStatus: action.payload,
          }
        }

        case SessionTypes.SET_TOKEN_LIFE_TIME: {
          return {
            ...state,
            tokenLifeTime: action.payload,
          }
        }

      default: {
        return state;
      }
    };
  };