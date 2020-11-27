import { StatusesTypes } from '../Types/statusesTypes'

type StatusesState = {
  hamburgerStatus: boolean
  addQuizButtonStatus: boolean
}

const initialState: StatusesState = {
  hamburgerStatus: false,
  addQuizButtonStatus: false
}

export const statusesReducer = (state = initialState, action: any): StatusesState => {
  switch (action.type) {
    case StatusesTypes.SET_HAMBURGER_STATUS: {
      return {
        ...state,
        hamburgerStatus: action.payload
      }
    }

    case StatusesTypes.SET_ADD_QUIZ_BUTTON_STATUS: {
      return {
        ...state,
        addQuizButtonStatus: action.payload
      }
    }

    default: {
      return state;
    }
  }
}