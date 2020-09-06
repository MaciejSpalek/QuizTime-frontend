import { UserTypes } from "../Types/userTypes";
// import api from "../../services/api";

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

// export const setCurrentUser = (route: string) => (dispatch: any) => {
//   dispatch({
//     type: UserTypes.SET_CURRENT_USER,
//     payload: api.get(`${route}`,)
//   })
// };