import { StatusesTypes } from '../Types/statusesTypes'

type StatusesState = {
  hamburgerStatus: boolean
}

const initialState: StatusesState = {
  hamburgerStatus: false
}

export const statusesReducer = (state = initialState, action: any): StatusesState => {
  switch (action.type) {
    case StatusesTypes.SET_HAMBURGER_STATUS: {
      return {
        ...state,
        hamburgerStatus: action.payload
      }
    }

    default: {
      return state;
    }
  }
}