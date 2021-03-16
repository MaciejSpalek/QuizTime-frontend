import React from 'react';
import GlobalTemplate from 'templates/GlobalTemplate';
import Template from 'templates/UniversalTemplate';
import ProfilePage from 'Pages/ProfilePage';
import Navbar from 'Components/organisms/Navbar';
import AuthPage from 'Pages/AuthPage/AuthPage';
import Footer from 'Components/molecules/Footer';
import Home from 'Pages/HomePage';
import ErrorPage from 'Pages/ErrorPage';
import QuizPage from 'Pages/QuizPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'routes/index';
import CategoryPage from 'Pages/CategoryPage';

const App = () => {
  return (
    <GlobalTemplate>
      <Router>
        <Navbar />
        <Template isWrapper>
            <Template isMain>
              <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route exact path={routes.register} component={AuthPage} />
                <Route exact path={routes.login} component={AuthPage} />
                <Route exact path={routes.category} component={CategoryPage} />
                <Route exact path={routes.profile} component={ProfilePage} />
                <Route exact path={routes.quiz} component={QuizPage} />
                <Route component={ErrorPage} />
              </Switch>
            </Template>
          <Footer />
        </Template>
      </Router>
    </GlobalTemplate>
  );
};

export default App;




