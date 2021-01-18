import { SessionTypes } from "../Types/sessionTypes";

type SessionState = {
  tokenLifeTime: number | null;
  loggedUser: string | null;
  isAuthenticated: boolean;
  requestStatus: boolean;
};

const initialState: SessionState = {
  isAuthenticated: false,
  requestStatus: true,
  tokenLifeTime: null,
  loggedUser: null,
};

export const sessionReducer = (
  state = initialState,
  action: any
): SessionState => {
  switch (action.type) {
    case SessionTypes.SET_IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }

    case SessionTypes.SET_REQUEST_STATUS: {
      return {
        ...state,
        requestStatus: action.payload,
      };
    }

    case SessionTypes.SET_TOKEN_LIFE_TIME: {
      return {
        ...state,
        tokenLifeTime: action.payload,
      };
    }

    case SessionTypes.SET_LOGGED_USER: {
      return {
        ...state,
        loggedUser: action.payload,
      };
    }

    case SessionTypes.RESET_LOGGED_USER: {
      return {
        ...state,
        loggedUser: null,
      };
    }

    default: {
      return state;
    }
  }
};
