import { QuizTypes } from "../Types/quizTypes";
import {
  IFormColor,
  IFormQuestion
} from "Interfaces/quizInterfaces";

type QuizState = {
  formQuestions: IFormQuestion[];
  formColor: IFormColor;
  formCounter: number;
  formIconName: string;
  formQuestionsCounter: number;
  correctAnswersArray: any;
  userAnswersArray: string[];
};

const initialState: QuizState = {
  correctAnswersArray: [],
  userAnswersArray: [],
  formQuestions: [],
  formQuestionsCounter: 0,
  formCounter: 1,
  formIconName: "male",
  formColor: {
    primary: "#00D952",
    secondary: "#00a03d",
  }
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
