import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoginPage from './Components/LoginPage'
import {Route, Switch, Link} from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute'

function App(props) {
  return (
    <div className="App">
      <h1>Jokes</h1>

      <LoginPage/>
    </div>
  );
}

export default App;
