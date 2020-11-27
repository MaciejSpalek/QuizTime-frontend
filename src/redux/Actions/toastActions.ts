import { ToastTypes } from "../Types/toastTypes";

export const setToastParameters = (
  isActive: boolean,
  description = 'Successfully added',
  icon = 'check-circle'
) => (dispatch: any) => {
  dispatch({
    type: ToastTypes.SET_TOAST_ACTIVE_STATE,
    payload: isActive
  });

  dispatch({
    type: ToastTypes.SET_TOAST_DESCRIPTION,
    payload: description
  });

  dispatch({
    type: ToastTypes.SET_TOAST_ICON,
    payload: icon
  });
};
