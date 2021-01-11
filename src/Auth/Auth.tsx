import React, { useCallback, useEffect } from 'react'
import { showCookie } from 'helpers/cookies'
import { authenticate } from 'redux/Actions/sessionActions'
import { useDispatch } from 'react-redux'
import { resetLoggedUser, setLoggedUser } from 'redux/Actions/userActions'

const Auth = () => {
    const dispatch = useDispatch()
    const setAuthentication = useCallback(() => {
        const token = showCookie('token');
        const name = showCookie('name');
        dispatch(authenticate(!!token));
        token ? dispatch(setLoggedUser(name)) :
                dispatch(resetLoggedUser())
    }, [dispatch]);

    useEffect(() => {
        setAuthentication();
    }, [setAuthentication]);

    useEffect(() => {
        setInterval(() => {
            setAuthentication();
        }, 1000);
    });

    return (<></>);
}


export default Auth;