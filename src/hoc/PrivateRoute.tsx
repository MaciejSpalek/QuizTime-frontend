import React, { useEffect, ComponentProps } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routes } from '../routes'
import { RootState } from '../redux/store'

type Props = {
    component: any
    path: string
}

// const PrivateRoute = ({ component: Component, ...props }: Props): JSX.Element => {
//     const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);

//     return (
//         <Route
//             {...props}
//             render={rest => (
//                 isAuthenticated ?
//                     <Component {...rest} /> :
//                     <Redirect 
//                         to={{ 
//                             pathname: `${routes.login}`, 
//                             state: { 
//                                 from: props.location.pathname 
//                             } 
//                         }} 
//                     />
//             )}
//         />
//     )
// }


// const PrivateRoute = ({component, ...rest}: any) => {
//     const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated)
//     console.log(isAuthenticated)

//     const routeComponent = (props: any) => (
//         isAuthenticated ? 
//             React.createElement(component, props)
//             : <Redirect to={{pathname: routes.login}}/>
//     )
//     return <Route {...rest} render={routeComponent}/>;
// }

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated)
    return (
      <Route
        {...rest}
        render={(props) =>
            isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: routes.login, state: { from: props.location.pathname } }}
            />
          )
        }
      />
    );
  };
export default PrivateRoute
