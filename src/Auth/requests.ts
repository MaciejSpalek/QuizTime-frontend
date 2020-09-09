import { getExpireDate, setCookie, deleteCookie } from '../helpers/cookies'
import { setRequestMessage, setRequestStatus } from '../redux/Actions/sessionActions'
import { setLoggedUser, resetLoggedUser } from '../redux/Actions/userActions'
import { axiosInstance } from '../services/api'

type DataType = {
    username: string
    password: string
}

export const login = async (data: DataType, dispatch: any) => {

    try {
        const res = await axiosInstance.post(`/authenticate`, data)
        const { token, jwt_TOKEN_VALIDITY: tokenLifeTime} = res.data
        const expireTokenDate: Date =  getExpireDate(tokenLifeTime)
        setCookie('token', token, expireTokenDate)
        setCookie('username', data.username, expireTokenDate)
        dispatch(setLoggedUser(data.username))
        dispatch(setRequestMessage(""))
        dispatch(setRequestStatus(true))
    } catch(error) {
        const errorMessage = {...error}.response.data
        const res = {...error}.response
        console.log(res)
        // dispatch(setRequestStatus(false))
        // dispatch(setRequestMessage(errorMessage))
        console.log(errorMessage)

        //fake
        // const expireTokenDate: Date =  getExpireDate(3600)
        // setCookie('token', "djsakhdksajhd21do21udn1!en1iudnsd21de2.332dsdb3iu2d.dsd32d2e3dnsui", expireTokenDate)
        // setCookie('username', data.username, expireTokenDate)
        // dispatch(setLoggedUser(data.username))
        // dispatch(setRequestMessage(""))
        // dispatch(setRequestStatus(true))
    }
}

export const register = async (data: DataType, dispatch: any) => {
    try {
        const res = await axiosInstance.post(`/register`, data)
        const { token, jwt_TOKEN_VALIDITY: tokenLifeTime} = res.data
        const expireTokenDate: Date =  getExpireDate(tokenLifeTime)
        setCookie('token', token, expireTokenDate)
        setCookie('username', data.username, expireTokenDate)
        dispatch(setLoggedUser(data.username))
        dispatch(setRequestMessage(""))
        dispatch(setRequestStatus(true))
    } catch(error) {
        const errorMessage = {...error}.response.data
        dispatch(setRequestStatus(false))
        dispatch(setRequestMessage(errorMessage))
        console.log(errorMessage)
    }
}



export const logout = (dispatch?: any): void => {
    deleteCookie('token')
    deleteCookie('username')
    dispatch(resetLoggedUser())
}