
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';

import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile'; 
import Search from '../Search/Search';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink activeClassName='active' to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink activeClassName='active' to='/profile'>Profile</NavLink></li>
                    <li><NavLink activeClassName='active' to='/search'>Search</NavLink></li>
                    <li><NavLink activeClassName='active' to='/'>Logout</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default Nav



