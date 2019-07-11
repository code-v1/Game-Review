import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//imports components
import './App.css';
import SignupPage from '../src/pages/SignupPage/SignupPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import userService from './utils/userService';


class App extends Component {

  constructor() {
    super();
    this.state ={
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return(
      <div>
      <header className='header-footer'>G A M E &nbsp;&nbsp;&nbsp;  R E V I E W</header>
      <Switch>
      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </Switch>
      </div>
    )
  }








}





export default App;