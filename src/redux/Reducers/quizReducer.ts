import { QuizTypes } from '../Types/quizTypes'
import { Quiz } from 'Interfaces/quizInterfaces'
import { Color } from 'Interfaces/quizInterfaces'


type QuizState = {
    allQuizes: Quiz[];
    userQuizes: Quiz[];
    formCounter: number;
    formTitle: string;
    formColor: Color
    formIconName: string;
    formRadioButton: string;
    formQuestion: string;
    formAnswerA: string;
    formAnswerB: string;
    formAnswerC: string;
    formAnswerD: string;
}

const initialState: QuizState = {
    allQuizes: [],
    userQuizes: [],

    formCounter: 1,
    formTitle: '',
    formIconName: 'male',
    formColor: {
      primary: '#00D952', secondary: '#00a03d'},
    formRadioButton: 'A',
    formQuestion: '',
    formAnswerA: '',
    formAnswerB: '',
    formAnswerC: '',
    formAnswerD: '',
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

        case QuizTypes.SET_FORM_INPUT_TITLE: {
          return {
            ...state,
            formTitle: action.payload
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




        case QuizTypes.SET_FORM_RADIO: {
          return {
            ...state,
            formRadioButton: action.payload
          }
        }
        case QuizTypes.SET_FORM_QUESTION: {
          return {
            ...state,
            formQuestion: action.payload
          }
        }

        case QuizTypes.SET_FORM_ANSWER_A: {
          return {
            ...state,
            formAnswerA: action.payload
          }
        }

        case QuizTypes.SET_FORM_ANSWER_B: {
          return {
            ...state,
            formAnswerB: action.payload
          }
        }

        case QuizTypes.SET_FORM_ANSWER_C: {
          return {
            ...state,
            formAnswerC: action.payload
          }
        }

        case QuizTypes.SET_FORM_ANSWER_D: {
          return {
            ...state,
            formAnswerD: action.payload
          }
        }
        
      default: {
        return state;
      }
    }
  }