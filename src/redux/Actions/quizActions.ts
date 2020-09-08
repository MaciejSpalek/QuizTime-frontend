import { QuizTypes } from "../Types/quizTypes";
import { axiosInstance } from '../../services/api'

export const setAllQuizes = ()=> async (dispatch: any) => {
    try {
        const quizes = await axiosInstance.get('/quiz/all')
        dispatch({
            type: QuizTypes.SET_ALL_QUIZES,
            payload: quizes.data
        })
    } catch {
        dispatch({
            type: QuizTypes.SET_ALL_QUIZES,
            payload: []
        })
    }
};

export const setUserQuizes = ()=> async (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_USER_QUIZES,
        payload: []
    })
};

