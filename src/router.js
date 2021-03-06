import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile'; 
import Search from './components/Search/Search'; 

export default (
    <div className="router">
        <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Profile} path='/profile' />
            <Route component={Search} path='/search' />
        </Switch>

    </div>
)

//    <Switch>
//         <Route exact path='/' component={Login} />
//         <Route path='/nav' render={() => (
//                 <Nav>
//                         <Route path='/nav/dash' component={Dash} />
//                         <Route path='/nav/wizard' component={Wizard} />
//                         <Route path='/nav/wizone' component={WizOne} />
//                         <Route path='/nav/wiztwo' component={WizTwo} />
//                         <Route path='/nav/wizthree' component={WizThree} />
//                         <Route path='/nav/wizfour' component={WizFour} />
//                         <Route path='/nav/wizfive' component={WizFive} />
//                 </Nav>
//         )} />
        
//     </Switch>