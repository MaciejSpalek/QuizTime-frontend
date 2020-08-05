import React from 'react'
import GlobalTemplate from '../templates/GlobalTemplate'
import Home from './Home'
import LoginPage from './LoginPage'
import UnknownPage from './UnknownPage'
import Navbar from '../Components/organisms/Navbar/index'
import MainTemplate from '../templates/MainTemplate'
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
            <Route exact path={routes.login} component={LoginPage} />
            <Route component={UnknownPage}/>
          </Switch>
        </MainTemplate>
      </Router>   
    </GlobalTemplate>     
  )
}  

export default App;




