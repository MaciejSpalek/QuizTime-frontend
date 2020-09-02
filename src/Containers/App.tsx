import React from 'react'
import GlobalTemplate from '../templates/GlobalTemplate'
import MainTemplate from '../templates/MainTemplate'
import Navbar from '../Components/organisms/Navbar/index'
import Home from './HomePage'
import AuthPage from './AuthPage'
import UnknownPage from './UnknownPage'
import PrivateRoute from '../hoc/PrivateRoute'
import ProfilePage from './ProfilePage'
import { routes } from '../routes/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <GlobalTemplate>
      <Router>  
        <Navbar />
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.login} component={AuthPage} />
            <Route exact path={routes.register} component={AuthPage} />
            <Route exact path={routes.profile} component={ProfilePage} />
            <Route component={UnknownPage}/>
          </Switch>
        </MainTemplate>
      </Router>   
    </GlobalTemplate>     
  )
}  

export default App;




