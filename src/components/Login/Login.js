// import React, { Component } from 'react';
// import './Login.css';


// export default class Login extends Component {
//     render() {
//         return (
//             <div className='App'> 
//                 <h2>Login Page</h2> 
//                 <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
//             </div> 
//         )
//     }
// }


import React, { Component } from "react";
import { NavLink } from 'react-router-dom'


import './Login.css';
import logo from './helo-logo.png';


export default class Login extends Component {
  render() {
    console.log(process.env)
    
    return (
      <div className="Auth__parent_container pink-to-green-gradient">
        <div className="Auth__child_container orange-to-yellow-gradient">
          <div className="Auth__logo_container">
            {<img className="Auth__logo_img" src={logo} alt="logo" />}
            <div className="Auth__logo_text open-sans-bold">Helo</div>
          </div>

          <div className="Auth__link_container">


              <a href='http://localhost:3005/auth'><button  className='loginBtn'>Login Auth0</button></a>
              <NavLink activeClassName='Auth__auth0_link open-sans' exact to='/dashboard'><button  className='loginBtn'>Login</button></NavLink>


          </div>
        </div>
      </div>
    )
  }
}


