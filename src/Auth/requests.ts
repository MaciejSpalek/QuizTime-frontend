import api from '../services/api'
import { getExpireDate, setCookie } from '../helpers/cookies'
import { setRequestMessage, setRequestStatus } from '../redux/Actions/sessionActions'


export const register = (data: object, dispatch: any): void => {
    api.post('/register', data)
    .then(res => {
        if (res.ok) {
            dispatch(setRequestStatus(true))
            dispatch(setRequestMessage(""))
            console.log("status 200")
  
            return res.json()
        } else {
            dispatch(setRequestStatus(false))
            dispatch(setRequestMessage(res.statusText))
            throw new Error(res.statusText)
        }
    })
    .then(res => {
        const token: string = res.token
        // const expireTime: string = res.expireTime
        const expireTokenDate: Date =  getExpireDate('100');
        setCookie('token', token, expireTokenDate)
    })
    .catch(error => {
        console.error(error)
    })
  }

 