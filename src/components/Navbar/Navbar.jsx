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
            <Link to="/User">My Account</Link>
            <Link to="/GamesList">Games</Link>
            <Link to="/Create">Create Game Review</Link>
            <NavItem className='login'>
            < Link to="/signup">Sign In</Link> 
            </NavItem>
            <NavItem className='login'>
            <Link to="/login">Log In</Link> 
            </NavItem>
        </Nav>
      </div>
    )
  };
};

//     <div className='NavBar'>
//       <Link to="/login" className='NavBar-link'>LOG IN</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
//     </div>
//   );
// };

