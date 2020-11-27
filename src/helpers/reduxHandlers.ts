import { setFormCounter, setFormQuestions, setFormQuestionsCounter } from "redux/Actions/quizActions";
import { setAddQuizButtonStatus } from "redux/Actions/statusesActions";


export const resetParameters = (dispatch: any) => {
    dispatch(setAddQuizButtonStatus(false));
    dispatch(setFormQuestionsCounter(0));
    dispatch(setFormQuestions([]));
    dispatch(setFormCounter(1));
  };