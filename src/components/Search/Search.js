import React, { Component } from 'react';
import './Search.css';


export default class Search extends Component {
    render() {
        return (
            <div className='App'>  
                {/* <img src={logo} alt=""/> */}
                <a href={ process.env.REACT_APP_Search }><button>Search</button></a>
            </div> 
        )
    }
}