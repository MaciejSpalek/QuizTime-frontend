import React from 'react'
import GlobalTemplate from '../templates/GlobalTemplate/GlobalTemplate'
import MainTemplate from '../templates/MainTemplate/MainTemplate'
import Navbar from '../Components/organisms/Navbar/index'
import Home from './HomePage'
import AuthPage from './AuthPage'
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
            <Route path={routes.login} component={AuthPage} />
            <Route path={routes.register} component={AuthPage} />
            <Route exact path={routes.profile} component={ProfilePage} />
          </Switch>
        </MainTemplate>
      </Router>   
    </GlobalTemplate>     
  )
}  

export default App;




