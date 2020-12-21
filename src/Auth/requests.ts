import { setToastParameters } from 'redux/Actions/toastActions';
import { getExpireDate, setCookie, deleteCookie } from 'helpers/cookies';
import { setRequestMessage, setRequestStatus } from 'redux/Actions/sessionActions';
import { setLoggedUser, resetLoggedUser } from 'redux/Actions/userActions';
import { axiosInstance } from 'services/api';

type DataType = {
    name: string;
    password: string;
};

type AuthType = 'login' | 'register';

export const authRequest =  (option: AuthType, data: DataType, dispatch: any) => {
    axiosInstance.post(`/auth/${option}`, data)
        .then((res) => {
            const { name, token, tokenLifeTime } = res.data;
            const expireTokenDate: Date =  getExpireDate(tokenLifeTime);
            setCookie('token', token, expireTokenDate);
            setCookie('name', name, expireTokenDate);
            dispatch(setLoggedUser(name));
            dispatch(setRequestMessage(""));
            dispatch(setRequestStatus(true));
            option === 'login' ?
                dispatch(setToastParameters(true, 'Successfully logged in')) :
                dispatch(setToastParameters(true, 'Successfully registered'))
        }).catch((error) => {
            const errorMessage = {...error.response}.data;
            dispatch(setRequestStatus(false));
            dispatch(setToastParameters(true, `${errorMessage}`, 'exclamation-circle'));
        });
};

export const logout = (dispatch: any): void => {
    deleteCookie('token');
    deleteCookie('name');
    dispatch(resetLoggedUser());
};