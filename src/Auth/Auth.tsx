import React, { useEffect } from 'react'
import { showCookie } from '../helpers/cookies'
import { authenticate } from '../redux/Actions/sessionActions'
import { useDispatch } from 'react-redux'
import { resetLoggedUser, setLoggedUser } from '../redux/Actions/userActions'
import { fetchAllQuizes } from '../redux/Actions/quizActions'

const Auth = () => {
    const dispatch = useDispatch()
    
    const setAuthentication = () => {
        const token = showCookie('token')
        const username = showCookie('username')

        if(token) {
            dispatch(authenticate(true))
            dispatch(setLoggedUser(username))
        } else {
            dispatch(authenticate(false))
            dispatch(resetLoggedUser())
        }
    }
    
    useEffect(()=> {
        dispatch(fetchAllQuizes()) // to change
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