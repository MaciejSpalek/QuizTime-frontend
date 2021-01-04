import { UserTypes } from "../Types/userTypes";

type UserState = {
  loggedUser: string | null;
};

const initialState: UserState = {
  loggedUser: null,
};

export const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case UserTypes.SET_LOGGED_USER: {
      return {
        ...state,
        loggedUser: action.payload
      };
    }

    case UserTypes.RESET_LOGGED_USER: {
      return {
        ...state,
        loggedUser: null
      };
    }

    default: {
      return state;
    }
  }
};
