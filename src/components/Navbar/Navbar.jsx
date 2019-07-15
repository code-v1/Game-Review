import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';



export default class NavBar extends Component  {
  render() {
  return (
    <div>
        <Nav tabs>
        <NavItem className='login'>
            <Link to="/User">My Account</Link>
            </NavItem>
            <NavItem className='login'>
            <Link to="/GamesList">Games</Link>
            </NavItem>
            <NavItem className='login'>
            <Link to="/Create">Create Game Review</Link>
            </NavItem>
            <NavItem className='login'>
            <Link to="/signup">Sign Up</Link> 
            </NavItem>
            <NavItem className='login'>
            <Link to="/login">Log In</Link> 
            </NavItem>
        </Nav>
      </div>
    )
  };
};



