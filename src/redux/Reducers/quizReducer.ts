import { QuizTypes } from '../Types/quizTypes'
import { IFormColor, IQuizTemplate, IFormQuestions } from 'Interfaces/quizInterfaces'


type QuizState = {
    allQuizes: IQuizTemplate[];
    userQuizes: IQuizTemplate[];
    formQuestions: IFormQuestions[];
    formColor: IFormColor
    formCounter: number;
    formIconName: string;
}

const initialState: QuizState = {
    allQuizes: [],
    userQuizes: [],
    formQuestions: [],
    formCounter: 1,
    formIconName: 'male',
    formColor: {
      primary: '#00D952', 
      secondary: '#00a03d'
    }
  }

export const quizReducer = (state = initialState, action: any): QuizState => {
    switch (action.type) {
        case QuizTypes.FETCH_ALL_QUIZES: {
          return {
            ...state,
            allQuizes: action.payload
          }
        }

        case QuizTypes.FETCH_USER_QUIZES: {
          return {
            ...state,
            userQuizes: action.payload
          }
        }



        
        case QuizTypes.SET_FORM_COUNTER: {
          return {
            ...state,
            formCounter: action.payload
          }
        }

        case QuizTypes.SET_FORM_COLOR: {
          return {
            ...state,
            formColor: action.payload
          }
        }
        
        case QuizTypes.SET_FORM_ICON_NAME: {
          return {
            ...state,
            formIconName: action.payload
          }
        }




        case QuizTypes.SET_FORM_QUESTIONS: {
          return {
            ...state,
            formQuestions: action.payload
          }
        }
       
        
      default: {
        return state;
      }
    }
  }