import { QuizTypes } from "../Types/quizTypes";
import { axiosInstance } from 'services/api'
import { Color } from "Interfaces/quizInterfaces";

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




export const setFormCounter = (value: number) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_FORM_COUNTER,
        payload: value
    })
};

export const setFormTitle = (value: string) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_FORM_INPUT_TITLE,
        payload: value
    })
};

export const setFormColor = (value: Color) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_FORM_COLOR,
        payload: value
    })
};

export const setFormIconName = (value: string) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_FORM_ICON_NAME,
        payload: value
    })
};




export const setFormRadio = (value: string) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_FORM_RADIO,
        payload: value
    })
};

export const setFormQuestion = (value: string) => (dispatch: any) => {
    dispatch({
        type: QuizTypes.SET_FORM_QUESTION,
        payload: value
    })
};

export const setFormAnswer = (value: string, letter: string) => (dispatch: any) => {
    dispatch({
        type: `SET_FORM_ANSWER_${letter}`,
        payload: value
    })
};
