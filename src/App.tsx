import React from 'react';
import GlobalTemplate from './templates/GlobalTemplate/GlobalTemplate';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Navbar from './Components/organisms/Navbar/Navbar';
import WrapperTemplate from 'templates/WrapperTemplate';
import AuthPage from './Pages/AuthPage/AuthPage';
import Home from './Pages/HomePage/HomePage';
import Footer from 'Components/molecules/Footer';
import ErrorPage from './Pages/ErrorPage';
import QuizPage from './Pages/QuizPage';
import { routes } from './routes/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <GlobalTemplate>
      <Router>
        <Navbar />
        <WrapperTemplate>
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
          <Footer />
        </WrapperTemplate>
      </Router>
    </GlobalTemplate>
  );
};

export default App;




