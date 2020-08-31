import api from '../services/api'
import { getExpireDate, setCookie } from '../helpers/cookies'
import { setRequestMessage, setRequestStatus } from '../redux/Actions/sessionActions'


export const register = (data: object, dispatch: any): void => {
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
    })
    .catch(error => {
        console.error(error) 
    })
  }

 
export const login = (data: object, dispatch: any): void => {
    api.post('/authenticate', data)
    .then(res => {
        if (res.ok) {
            dispatch(setRequestStatus(true))
            dispatch(setRequestMessage(""))
            return res.json()
        } else {
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
        
    })
    .catch(error => {
        console.error(error)
    })
  }
