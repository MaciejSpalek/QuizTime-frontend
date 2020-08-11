import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  AUTH_REQUEST,
} from "../Types/sessionTypes";

export const authenticate = () => async (dispatch: any) => {
  dispatch({ type: AUTH_REQUEST });
  try {
  } catch (err) {}
};
