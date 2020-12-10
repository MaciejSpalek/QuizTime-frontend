import { QuizTypes } from "../Types/quizTypes";
import { IFormColor, IFormQuestion } from "Interfaces/quizInterfaces";

export const setCurrentScore = (score: string) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_CURRENT_SCORE,
    payload: score,
  });
};


export const setFormQuestions = (array: IFormQuestion[]) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_QUESTIONS,
    payload: array,
  });
};

export const setFormCounter = (counter: number) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_COUNTER,
    payload: counter,
  });
};

export const setFormColor = (color: IFormColor) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_COLOR,
    payload: color,
  });
};

export const setFormIconName = (iconName: string) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_ICON_NAME,
    payload: iconName,
  });
};


export const setFormQuestionsCounter = (counter: number) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_QUESTIONS_COUNTER,
    payload: counter,
  });
};