
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css';
import homelogo from './homelogo.png';
import searchlogo from './searchlogo.png';

import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Search from '../Search/Search';

class Nav extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="home-search">
                <div className="helo">Helo</div>
                    <NavLink activeClassName='active' to='/dashboard'><img src='homelogo' alt='homelogo' /></NavLink>
                    {/* <li><NavLink activeClassName='active' to='/profile'>Profile</NavLink></li> */}
                    <NavLink activeClassName='active' to='/search'><img src='searchlogo' alt='search' /></NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to='/'><div className='logout'>Logout</div></NavLink>
                </div>
            </div>
        )
    }
}
export default Nav



