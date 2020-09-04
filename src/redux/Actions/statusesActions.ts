import { StatusesTypes } from "../Types/statusesTypes";

export const setHamburgerStatus = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: StatusesTypes.SET_HAMBURGER_STATUS,
    payload: state
  })
};

