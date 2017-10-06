import React, { Component } from 'react';
import './Search.css';
import Nav from '../Nav/Nav';


export default class Search extends Component {
    render() {
        return (
            <div className='App'> 
                <Nav /> 
                <div className='search'>
                 <h2>Search Page</h2> 
                 </div>
            </div> 
        )
    }
}