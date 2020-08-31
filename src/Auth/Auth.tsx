import React, { useEffect } from 'react'
import { showCookie } from '../helpers/cookies'
import { authenticate } from '../redux/Actions/sessionActions'
import { useDispatch } from 'react-redux'

const Auth = () => {
    const dispatch = useDispatch()
    
    const setAuthentication = () => {
        const token = showCookie('token')
        if(!token) {
            console.log("Brak autoryzacji")
            dispatch(authenticate(false))
        } else {
            console.log("Zautoryzowano")
            dispatch(authenticate(true))
        }
    }

    useEffect(()=> {
        setAuthentication()
    }, [])

    useEffect(()=> {
        setInterval(()=> {
            setAuthentication()
        }, 3000)
    })

    return (<></>)
}


export default Auth