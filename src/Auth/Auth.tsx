import React, { useEffect } from 'react'
import { showCookie } from 'helpers/cookies'
import { authenticate } from 'redux/Actions/sessionActions'
import { useDispatch } from 'react-redux'
import { resetLoggedUser, setLoggedUser } from 'redux/Actions/userActions'

const Auth = () => {
    const dispatch = useDispatch()
    
    const setAuthentication = () => {
        const token = showCookie('token')
        const name = showCookie('name')

        if(token) {
            dispatch(authenticate(true))
            dispatch(setLoggedUser(name))
        } else {
            dispatch(authenticate(false))
            dispatch(resetLoggedUser())
        }
    }
    
    useEffect(()=> {
        setAuthentication()
    }, [])

    useEffect(()=> {
        setInterval(()=> {
            setAuthentication();
        }, 3000)
    })

    return (<></>)
}


export default Auth;