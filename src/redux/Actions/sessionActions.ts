import { SessionTypes } from "../Types/sessionTypes";

export const setIsAuthenticatedState = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: SessionTypes.SET_IS_AUTHENTICATED,
    payload: state
  })
};

