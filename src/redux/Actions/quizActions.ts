import { QuizTypes } from "../Types/quizTypes";
import { axiosInstance } from "services/api";
import { IFormColor, IFormQuestion } from "Interfaces/quizInterfaces";

export const fetchAllQuizes = () => async (dispatch: any) => {
  await axiosInstance.get("/quizes/allQuizzes").then(({ data }) =>
    dispatch({
      type: QuizTypes.FETCH_ALL_QUIZZES,
      payload: data
    })
  );
};

export const fetchUserQuizzes = (author: string) => async (dispatch: any) => {
  await axiosInstance
    .get("/quizes/userQuizzes", { params: { author }})
    .then(({ data }) => {
      dispatch({
        type: QuizTypes.FETCH_USER_QUIZZES,
        payload: data
      });
    });
};

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
