import { QuizTypes } from "../Types/quizTypes";
import {
  IFormColor,
  IQuizTemplate,
  IFormQuestion,
} from "Interfaces/quizInterfaces";

type QuizState = {
  allQuizzes: IQuizTemplate[];
  userQuizzes: IQuizTemplate[];
  formQuestions: IFormQuestion[];
  formColor: IFormColor;
  formCounter: number;
  formIconName: string;
  formQuestionsCounter: number
};

const initialState: QuizState = {
  allQuizzes: [],
  userQuizzes: [],
  formQuestions: [],
  formQuestionsCounter: 0,
  formCounter: 1,
  formIconName: "male",
  formColor: {
    primary: "#00D952",
    secondary: "#00a03d",
  },
};

export const quizReducer = (state = initialState, action: any): QuizState => {
  switch (action.type) {
    case QuizTypes.FETCH_ALL_QUIZZES: {
      return {
        ...state,
        allQuizzes: action.payload,
      };
    }

    case QuizTypes.FETCH_USER_QUIZZES: {
      return {
        ...state,
        userQuizzes: action.payload,
      };
    }

    case QuizTypes.SET_FORM_COUNTER: {
      return {
        ...state,
        formCounter: action.payload,
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
