import { getExpireDate, setCookie, deleteCookie } from '../helpers/cookies'
import { setRequestMessage, setRequestStatus } from '../redux/Actions/sessionActions'
import { setLoggedUser, resetLoggedUser } from '../redux/Actions/userActions'
import api from '../services/api'


type DataType = {
    username: string
    password: string
}

export const register = (data: DataType, dispatch: any): void => {
    api.post('/register', data)
    .then(res => {
        if (res.ok) {
            dispatch(setRequestStatus(true))
            dispatch(setRequestMessage(""))
            return res.json()
        } else {
            dispatch(setRequestStatus(false))
            if(res.status === 409) {
                dispatch(setRequestMessage('User already exists'))
            } else {
                dispatch(setRequestMessage('Disconnected server'))
            }
            throw new Error(res.statusText)
        }
    })
    .then(res => {
        const { token, jwt_TOKEN_VALIDITY: tokenLifeTime} = res
        const expireTokenDate: Date =  getExpireDate(tokenLifeTime)
        setCookie('token', token, expireTokenDate)
        dispatch(setLoggedUser(data.username))
    })
    .catch(error => {
        console.error(error) 
    })
  }

 
export const login = (data: DataType, dispatch: any): void => {
    api.post('/authenticate', data)
    .then(res => {
        if (res.ok) {
            dispatch(setRequestStatus(true))
            dispatch(setRequestMessage(""))
            return res.json()
        } else {

            // const expireTokenDate: Date =  getExpireDate(300)
            // setCookie('token', "dsadsad32d2sd", expireTokenDate)

            dispatch(setRequestStatus(false))
            if(res.status === 404 || res.status === 401) {
                dispatch(setRequestMessage('Invalid username or password'))
            } else {
                dispatch(setRequestMessage('Disconnected server'))
            }
            throw new Error(res.statusText)
        }
    })
    .then(res => {
        const { token, jwt_TOKEN_VALIDITY: tokenLifeTime} = res
        const expireTokenDate: Date =  getExpireDate(tokenLifeTime)
        setCookie('token', token, expireTokenDate)
        dispatch(setLoggedUser(data.username))
    })
    .catch(error => {
        console.error(error)
    })
  }

export const logout = (dispatch?: any): void => {
    deleteCookie('token')
    dispatch(resetLoggedUser())
    
}