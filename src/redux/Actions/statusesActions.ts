import { StatusesTypes } from "../Types/statusesTypes";

export const setHamburgerStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: StatusesTypes.SET_HAMBURGER_STATUS,
    payload: state
  })
};


export const setAddQuizButtonStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: StatusesTypes.SET_ADD_QUIZ_BUTTON_STATUS,
    payload: state
  })
};


export const setScrollStatus = (state: boolean | undefined) => (dispatch: any) => {
  dispatch({
    type: StatusesTypes.QUIZ_SCROLL_STATUS,
    payload: state
  })
};

