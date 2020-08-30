import React from 'react'
import GlobalTemplate from '../templates/GlobalTemplate'
import MainTemplate from '../templates/MainTemplate'
import Navbar from '../Components/organisms/Navbar/index'
import Home from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import UnknownPage from './UnknownPage'
import PrivateRoute from '../hoc/PrivateRoute'
import ProfilePage from './ProfilePage'
import { routes } from '../routes/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withCookies, Cookies } from 'react-cookie'

const App = () => {
  return (
    <GlobalTemplate>
      <Router>  
        <Navbar />
        <MainTemplate>
          <Switch>
            <PrivateRoute exact path={routes.profile} component={ProfilePage} />
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.register} component={RegisterPage} />
            <Route component={UnknownPage}/>
          </Switch>
        </MainTemplate>
      </Router>   
    </GlobalTemplate>     
  )
}  

export default App;




