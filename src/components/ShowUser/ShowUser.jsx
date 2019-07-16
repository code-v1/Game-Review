import React, {Component} from 'react';
import userService from '../../utils/userService'
import './ShowUser.css'

const user = userService.getUser()
console.log(user)

export default class ShowUser extends Component {
    render() {
            return (
            <div className='user'>
               <p>User: {`${user.name}`} </p>
               <p>Email:{`${user.email}`}</p>
            </div>
            
        )
    };
};

