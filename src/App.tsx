import React from 'react'
import MainTemplate from './templates/MainTemplate'
// import Navbar from '../Components/Organism/navbar';
import Home from './Containers/Home'
import UnknownPage from './Containers/UnknownPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
      <MainTemplate>
          <Router>  
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/" component={UnknownPage}/>
            </Switch>
          </Router>   
      </MainTemplate>     
      
  )
}  

export default App;




