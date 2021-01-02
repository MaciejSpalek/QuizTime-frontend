import React from 'react';
import GlobalTemplate from '../templates/GlobalTemplate/GlobalTemplate';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Navbar from '../Components/organisms/Navbar/Navbar';
import Home from './HomePage/HomePage';
import AuthPage from './AuthPage/AuthPage';
import ProfilePage from './ProfilePage/ProfilePage';
import ErrorPage from './ErrorPage';
import QuizPage from './QuizPage';
import { routes } from '../routes/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <GlobalTemplate>
      <Router>  
        <Navbar />
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.register} component={AuthPage} />
            <Route exact path={routes.login} component={AuthPage} />
            <Route exact path={routes.profile} component={ProfilePage} />
            <Route exact path={routes.quiz} component={QuizPage} />
            <Route component={ErrorPage} />
          </Switch>
        </MainTemplate>
      </Router>   
    </GlobalTemplate>     
  );
};  

export default App;




