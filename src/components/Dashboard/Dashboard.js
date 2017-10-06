import React, { Component } from 'react';
import './Dashboard.css';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container" >
                <Nav/> 
                <h2>Dashboard Page</h2>
            </div>
        )
    }
}
export default Dashboard;