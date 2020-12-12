import { QuizTypes } from "../Types/quizTypes";
import { IFormColor, IFormQuestion } from "Interfaces/quizInterfaces";

export const setCorrectAnswersArray = (array: string[]) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_CORRECT_ANSWERS_ARRAY,
    payload: array,
  });
};

export const setUserAnswersArray = (array: string[]) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_USER_ANSWERS_ARRAY,
    payload: array,
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