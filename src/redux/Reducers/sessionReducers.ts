import { SessionTypes } from '../Types/sessionTypes'

interface SessionState {
    isAuthenticated: boolean
    requestStatus: boolean
    errorMessage: string
    requestDate: string
    tokenLifeTime: number | null
}

const initialState: SessionState = {
    isAuthenticated: false,
    requestStatus: true,
    tokenLifeTime: null,
    errorMessage: "",
    requestDate: ""
  };

export const sessionReducer = (state = initialState, action: any): SessionState => {
    switch (action.type) {
        case SessionTypes.SET_IS_AUTHENTICATED: {
          return {
            ...state,
            isAuthenticated: action.payload.isAuthenticated,
          };
        }

        case SessionTypes.SET_ERROR_MESSAGE: {
          return {
            ...state,
            errorMessage: action.payload.errorMessage,
          };
        }

        case SessionTypes.SET_REQUEST_STATUS: {
          return {
            ...state,
            requestStatus: action.payload.requestStatus,
          };
        }

        case SessionTypes.SET_TOKEN_LIFE_TIME: {
          return {
            ...state,
            tokenLifeTime: action.payload.tokenLifeTime,
          };
        }

        case SessionTypes.SET_REQUEST_DATE: {
          return {
            ...state,
            requestDate: action.payload.requestDate,
          };
        }

      default: {
        return state;
      }
    }
  }