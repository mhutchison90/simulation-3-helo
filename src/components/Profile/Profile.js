import React, { Component } from 'react';
import './Profile.css';


export default class Profile extends Component {
    render() {
        return (
            <div className='App'>  
                {/* <img src={logo} alt=""/> */}
                <a href={ process.env.REACT_APP_Profile }><button>Profile</button></a>
            </div> 
        )
    }
}