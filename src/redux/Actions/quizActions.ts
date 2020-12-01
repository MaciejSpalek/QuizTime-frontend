import { QuizTypes } from "../Types/quizTypes";
import { IFormColor, IFormQuestion } from "Interfaces/quizInterfaces";

export const setFormQuestions = (array: IFormQuestion[]) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_QUESTIONS,
    payload: array,
  });
};

export const setFormCounter = (value: number) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_COUNTER,
    payload: value,
  });
};

export const setFormColor = (value: IFormColor) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_COLOR,
    payload: value,
  });
};

export const setFormIconName = (value: string) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_ICON_NAME,
    payload: value,
  });
};


export const setFormQuestionsCounter = (value: number) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_QUESTIONS_COUNTER,
    payload: value,
  });
};