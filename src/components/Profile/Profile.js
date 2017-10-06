import React, { Component } from 'react';
import './Profile.css';
import Nav from '../Nav/Nav';


export default class Profile extends Component {
    render() {
        return (
            <div className='App'> 
                <Nav/> 
                 <h2>Profile Page</h2> 
            </div> 
        )
    }
}