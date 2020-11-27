import { UserTypes } from '../Types/userTypes'

type UserState = {
  loggedUser: string | null
  currentUser: string | null
  users: string[]

}

const initialState: UserState = {
  loggedUser: null,
  currentUser: null,
  users: [],
};

export const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case UserTypes.SET_LOGGED_USER: {
      return {
        ...state,
        loggedUser: action.payload
      }
    }

    case UserTypes.RESET_LOGGED_USER: {
      return {
        ...state,
        loggedUser: null
      }
    }

    case UserTypes.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload
      }
    }

    case UserTypes.SET_USERS: {
      return {
        ...state,
        users: action.payload
      }
    }

    default: {
      return state;
    }
  }
}