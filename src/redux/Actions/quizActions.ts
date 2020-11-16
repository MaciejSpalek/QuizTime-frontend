import { QuizTypes } from "../Types/quizTypes";
import { axiosInstance } from "services/api";
import { IFormColor, IFormQuestions } from "Interfaces/quizInterfaces";

// export const fetchAllQuizes = () => async (dispatch: any) => {
//   try {
//     const quizes = await axiosInstance.get("/quiz/all");
//     dispatch({
//       type: QuizTypes.FETCH_ALL_QUIZES,
//       payload: quizes.data,
//     });
//   } catch {
//     dispatch({
//       type: QuizTypes.FETCH_ALL_QUIZES,
//       payload: [],
//     });
//   }
// };

// export const fetchUserQuizes = (username: string) => async (dispatch: any) => {
//   try {
//     const quizes = await axiosInstance.get("/quiz", {
//       params: { username: username },
//     });
//     dispatch({
//       type: QuizTypes.FETCH_USER_QUIZES,
//       payload: quizes.data,
//     });
//   } catch {
//     dispatch({
//       type: QuizTypes.FETCH_USER_QUIZES,
//       payload: [],
//     });
//   }
// };

export const setFormQuestions = (array: IFormQuestions[]) => (dispatch: any) => {
  dispatch({
    type: QuizTypes.SET_FORM_QUESTIONS,
    payload: array
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
