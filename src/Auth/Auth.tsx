import React, { useEffect } from 'react'
import { showCookie } from '../helpers/cookies'
import { authenticate } from '../redux/Actions/sessionActions'
import { useDispatch } from 'react-redux'
import { resetLoggedUser, setLoggedUser } from '../redux/Actions/userActions'

const Auth = () => {
    const dispatch = useDispatch()
    
    const setAuthentication = () => {
        const token = showCookie('token')
        const username = showCookie('username')

        if(!token) {
            dispatch(authenticate(false))
            dispatch(resetLoggedUser())
        } else {
            dispatch(authenticate(true))
            dispatch(setLoggedUser(username))
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