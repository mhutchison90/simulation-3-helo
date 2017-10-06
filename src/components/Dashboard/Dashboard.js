import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Dashboard.css';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container" >
                <Nav />
                <div className="dash">
                <h2>Dashboard Page</h2>
                <div className='profile-tile-container'>
                    <div className='user-info'>image and user name</div>
                    <div className='edit-profile-button'>
                    <NavLink activeClassName='active' to='/profile'><button>Edit Profile</button></NavLink>
                    </div>
                </div>
                <div className='welcome-tile'>Welcome to Helo! Find recommended friends based on your similarities!</div>
                <div className='recomended-friends'>
                    <h3>Recommended Friends</h3>
                    <div className='sorted-by-drop-down'>
                    Sorted by <select>
                            <option>First Name</option>
                            <option>Last Name</option>
                            <option>Gender</option>
                            <option>Hobby</option>
                            <option>Hair Color</option>
                            <option>Eye Color</option>
                            <option>Birthday</option>
                        </select>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;