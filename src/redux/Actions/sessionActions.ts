import {
  SET_IS_AUTHENTICATED
} from "../Types/sessionTypes";

export const setIsAuthenticatedState = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: SET_IS_AUTHENTICATED,
    payload: state
  })
};

