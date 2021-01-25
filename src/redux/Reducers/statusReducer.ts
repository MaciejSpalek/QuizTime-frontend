import { StatusTypes } from '../Types/statusTypes'

type StatusesState = {
  isTheServerConnected: boolean;
  addQuizButtonStatus: boolean;
  hamburgerStatus: boolean;  
}

const initialState: StatusesState = {
  isTheServerConnected: false,
  addQuizButtonStatus: false,
  hamburgerStatus: false,  
}

export const statusReducer = (state = initialState, action: any): StatusesState => {
  switch (action.type) {
    case StatusTypes.SET_HAMBURGER_STATUS: {
      return {
        ...state,
        hamburgerStatus: action.payload
      }
    }

    case StatusTypes.SET_ADD_QUIZ_BUTTON_STATUS: {
      return {
        ...state,
        addQuizButtonStatus: action.payload
      }
    }

    case StatusTypes.SET_SERVER_STATUS: {
      return {
        ...state,
        isTheServerConnected: action.payload,
      };
    }


    default: {
      return state;
    }
  }
}