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
  userId = 'fifty'
  //yo whaddup
  render() {
    return (
      <div className="App">
        
        <Route exact path='/' component={LandingPage} />
        <Route path='/HowItWorks' render={({history}) => (
          <HowItWorks/>
          )}
        />
        <Route  path='/Login' component={LoginPage} />
        <Route exact path='/SignUp' component={SignUpPage} />
        <Route exact path='/onboarding' component={OnboardingPage} />

        {/* <Switch>
          <Route path="/Login" component={LoginPage}/>
          <Route path="/SignUp" component={SignUpPage}/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
