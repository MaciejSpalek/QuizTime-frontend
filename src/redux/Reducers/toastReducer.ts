import { ToastTypes } from "../Types/toastTypes";

type ToastState = {
  isActive: boolean;
  description: string;
  icon: string;
};

const initialState: ToastState = {
  isActive: false,
  description: "",
  icon: "check-circle"
};

export const toastReducer = (state = initialState, action: any): ToastState => {
  switch (action.type) {
    case ToastTypes.SET_ACTIVE_STATE: {
      return {
        ...state,
        isActive: action.payload,
      };
    };

    case ToastTypes.SET_DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
      };
    };

    case ToastTypes.SET_ICON: {
      return {
        ...state,
        icon: action.payload,
      };
    };

    default: {
      return state;
    };
  };
};
