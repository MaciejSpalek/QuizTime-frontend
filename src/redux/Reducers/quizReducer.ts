import { QuizTypes } from "../Types/quizTypes";
import { QuizThemes } from 'helpers/constants';
import { IFormColor, IFormQuestion } from "Interfaces/quizInterfaces";


type QuizState = {
  formQuestions: IFormQuestion[];
  formQuestionsCounter: number;
  userAnswersArray: string[];
  correctAnswersArray: any;
  formColor: IFormColor;
  formIconName: string;
  formCategory: string;
};

const { value } = QuizThemes[0];
const initialState: QuizState = {
  formQuestionsCounter: 0,
  correctAnswersArray: [],
  userAnswersArray: [],
  formCategory: "Person",
  formIconName: "male",
  formQuestions: [],
  formColor: value
};

export const quizReducer = (state = initialState, action: any): QuizState => {
  switch (action.type) {
    case QuizTypes.SET_CORRECT_ANSWERS_ARRAY: {
      return {
        ...state,
        correctAnswersArray: action.payload,
      };
    }
    case QuizTypes.SET_USER_ANSWERS_ARRAY: {
      return {
        ...state,
        userAnswersArray: action.payload,
      };
    }

    case QuizTypes.SET_FORM_CATEGORY: {
      return {
        ...state,
        formCategory: action.payload,
      };
    }

    case QuizTypes.SET_FORM_COLOR: {
      return {
        ...state,
        formColor: action.payload,
      };
    }

    case QuizTypes.SET_FORM_ICON_NAME: {
      return {
        ...state,
        formIconName: action.payload,
      };
    }

    case QuizTypes.SET_FORM_QUESTIONS: {
      return {
        ...state,
        formQuestions: action.payload,
      };
    }

    case QuizTypes.SET_FORM_QUESTIONS_COUNTER: {
      return {
        ...state,
        formQuestionsCounter: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
