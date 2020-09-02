import { UserTypes } from "../Types/userTypes";

export const setLoggedUser = (name: string) => (dispatch: any) => {
  dispatch({
    type: UserTypes.SET_LOGGED_USER,
    payload: name
  })
};

export const resetLoggedUser = () => (dispatch: any) => {
  dispatch({
    type: UserTypes.RESET_LOGGED_USER,
    payload: null
  })
};