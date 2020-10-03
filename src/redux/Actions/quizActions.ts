import { QuizTypes } from "../Types/quizTypes";
import { axiosInstance } from '../../services/api'

export const fetchAllQuizes = ()=> async (dispatch: any) => {
    try {
        const quizes = await axiosInstance.get('/quiz/all')
        dispatch({
            type: QuizTypes.FETCH_ALL_QUIZES,
            payload: quizes.data
        })
    } catch {
        dispatch({
            type: QuizTypes.FETCH_ALL_QUIZES,
            payload: []
        })
    }
};

export const fetchUserQuizes = (username: string)=> async (dispatch: any) => {
    try {
        const quizes = await axiosInstance.get('/quiz', {params:{username: username}})
        dispatch({
            type: QuizTypes.FETCH_USER_QUIZES,
            payload: quizes.data
        })
    } catch {
        dispatch({
            type: QuizTypes.FETCH_USER_QUIZES,
            payload: []
        })
    }
};


export const setQuizFormPageCounter = (counter: number) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_QUIZ_FORM_PAGE_COUNTER,
        payload: counter
    })
};
