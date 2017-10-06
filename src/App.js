import React, { Component } from 'react';
import './App.css';
// import {HashRouter, Route} from 'react-router-dom';
import router from './router';
import Nav from './components/Nav/Nav';



class App extends Component {
  render() {
    return (
        <div className="App">
          <div className='NavBar'>
          </div>
          {router}
        </div>
    );
  }
}

export default App;
