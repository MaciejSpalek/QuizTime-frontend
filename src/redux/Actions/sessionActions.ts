import { SessionTypes } from "../Types/sessionTypes";

export const authenticate = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: SessionTypes.SET_IS_AUTHENTICATED,
    payload: state
  })
};

export const setRequestStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: SessionTypes.SET_REQUEST_STATUS,
    payload: state
  })
};

export const setLoggedUser = (name: string) => (dispatch: any) => {
  dispatch({
    type: SessionTypes.SET_LOGGED_USER,
    payload: name
  })
};

export const resetLoggedUser = () => (dispatch: any) => {
  dispatch({
    type: SessionTypes.RESET_LOGGED_USER,
    payload: null
  })
};
