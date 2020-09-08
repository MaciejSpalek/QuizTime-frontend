import { QuizTypes } from '../Types/quizTypes'
import { Quiz } from '../../Interfaces/quizInterfaces'


type QuizState = {
    allQuizes: Quiz[]
    userQuizes: Quiz[]
}

const initialState: QuizState = {
    allQuizes: [],
    userQuizes: [],
  }

export const quizReducer = (state = initialState, action: any): QuizState => {
    switch (action.type) {
        case QuizTypes.SET_ALL_QUIZES: {
          return {
            ...state,
            allQuizes: action.payload
          }
        }

        case QuizTypes.SET_USER_QUIZES: {
          return {
            ...state,
            userQuizes: action.payload
          }
        }

      default: {
        return state;
      }
    }
  }