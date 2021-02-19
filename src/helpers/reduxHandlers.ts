import { setAddQuizButtonStatus } from "redux/Actions/statusActions";
import { 
  setFormQuestions, 
  setFormQuestionsCounter 
} from "redux/Actions/quizActions";


export const resetParameters = (dispatch: any) => {
    dispatch(setAddQuizButtonStatus(false));
    dispatch(setFormQuestionsCounter(0));
    dispatch(setFormQuestions([]));
  };