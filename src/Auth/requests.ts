import { getExpireDate, setCookie, deleteCookie } from '../helpers/cookies'
import { setRequestMessage, setRequestStatus } from '../redux/Actions/sessionActions'
import { setLoggedUser, resetLoggedUser } from '../redux/Actions/userActions'
import { axiosInstance } from '../services/api'

type DataType = {
    name: string
    password: string
}

type AuthType = 'login' | 'register';

export const authRequest = async (option: AuthType, data: DataType, dispatch: any) => {
    await axiosInstance.post(`/user/${option}`, data)
        .then((res) => {
            const { name, token, tokenLifeTime } = res.data;
            const expireTokenDate: Date =  getExpireDate(tokenLifeTime);
            setCookie('token', token, expireTokenDate);
            setCookie('name', name, expireTokenDate);
            dispatch(setLoggedUser(name));
            dispatch(setRequestMessage(""));
            dispatch(setRequestStatus(true));
        }).catch((error) => {
            const errorMessage = {...error.response}.data;
            dispatch(setRequestStatus(false));
            dispatch(setRequestMessage(errorMessage));
        })
}

export const logout = (dispatch?: any): void => {
    deleteCookie('token')
    deleteCookie('name')
    dispatch(resetLoggedUser())
}