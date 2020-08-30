import React, { useEffect } from 'react'
import { showCookie } from '../helpers/cookies'
import { authenticate } from '../redux/Actions/sessionActions'
import { useDispatch } from 'react-redux'

const Auth = () => {
    const dispatch = useDispatch()
    // useEffect(()=> {
        const interval = setInterval(()=> {
            const token = showCookie('token')
            if(!token) {
                console.log("ustawiam na false")
                dispatch(authenticate(false))
                // clearInterval(interval)
            } 
            else {
                console.log("ustawiam na true")
                dispatch(authenticate(true))
                // clearInterval(interval)
            }
        }, 3000)
    // }, [document.cookie])
    return (<></>)
}


export default Auth