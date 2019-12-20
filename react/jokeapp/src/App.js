import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoginPage from './Components/LoginPage'
import {Route, Switch, Link} from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute'
import Jokes from './Components/jokes'
function App(props) {
  return (
    <div className="App">
      <h1>Jokes</h1>

      <Link to ="/login">Login</Link>

    <Link to = "/jokes"> Jokes Page </Link>



<Switch>
<PrivateRoute exact path ="/jokes" component ={Jokes}/>
<Route path="/login" component ={LoginPage} />
<Route component ={LoginPage} />
</Switch>

    </div>
  );
}

export default App;
