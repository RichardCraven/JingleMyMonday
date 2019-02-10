import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import HowItWorks from './HowItWorks';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import OnboardingPage from './OnboardingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route exact path='/' render={() => (
          <LandingPage/>
        
        )} />
        <Route path='/HowItWorks' render={({history}) => (
          <HowItWorks/>
          )}
        />
        <Route exact path='/Login' render={() => (
          <LoginPage/>
        )} />
        <Route exact path='/SignUp' render={() => (
          <SignUpPage/>
        )} />
        <Route exact path='/onboarding' render={() => (
          <OnboardingPage/>
        )} />

        {/* <Switch>
          <Route path="/Login" component={LoginPage}/>
          <Route path="/SignUp" component={SignUpPage}/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
