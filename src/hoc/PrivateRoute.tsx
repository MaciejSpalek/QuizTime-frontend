import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { routes } from '../routes'
import { RootState } from '../redux/store'

interface Props {
    component?: any
    path: string
    exact: boolean
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...props }): any => {
    const isAuthenticated = useSelector<RootState>(state => state.session.isAuthenticated);
    
    return (
        <Route
            {...props}
            render={(props) => (
                isAuthenticated ?
                    <Component {...props} /> :
                    <Redirect to={routes.login} />
            )}
        />
    )
}

export default PrivateRoute; 