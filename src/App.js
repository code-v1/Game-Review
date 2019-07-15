/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
//imports components
import './App.css';
import SignupPage from '../src/pages/SignupPage/SignupPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import userService from './utils/userService';
import NavBar from './components/Navbar/Navbar';
import ShowUser from './components/ShowUser/ShowUser';
import GamesList from './components/GamesList/GamesList';
import CreateGame from './components/CreateGame/CreateGame';
import EditGame from './components/EditGame/EditGame';

// import GamesList from 



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
      <Router>
      <NavBar />
      
      
      
    
     <Route path='/GamesList' exact component={GamesList} />
     <Route path='/edit/:id' exact component={EditGame} />
     <Route path='/create' exact component={CreateGame} />
     <Route path='/user' exact component={ShowUser} /> 
      
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
          </Router>
      
      
      </div>
    )
  }








}





export default App;