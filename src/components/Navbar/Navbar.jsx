import React from 'react';
// import { Link } from 'react-router-dom';
import {Nav, NavLink, NavItem} from 'reactstrap';
import './NavBar.css';



const NavBar = () => {
  return (
    <div>
        <Nav tabs>
            <NavLink href="#">My Account</NavLink>
            <NavLink href="#">Games</NavLink>
            <NavItem className='login'>
            <NavLink href="#">Sign In</NavLink> 
            </NavItem>
            <NavItem className='login'>
            <NavLink href="#">Log In</NavLink> 
            </NavItem>
        </Nav>
      </div>
    );
  }

//     <div className='NavBar'>
//       <Link to="/login" className='NavBar-link'>LOG IN</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
//     </div>
//   );
// };

export default NavBar;