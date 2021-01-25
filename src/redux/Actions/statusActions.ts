import { StatusTypes } from "../Types/statusTypes";

export const setHamburgerStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: StatusTypes.SET_HAMBURGER_STATUS,
    payload: state
  })
};

export const setAddQuizButtonStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: StatusTypes.SET_ADD_QUIZ_BUTTON_STATUS,
    payload: state
  })
};

export const setServerStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: StatusTypes.SET_SERVER_STATUS,
    payload: state
  })
};
