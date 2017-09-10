import React, { Component } from 'react';
import logo from '../logo.svg';
import {PageHeader, Jumbotron, Button} from 'react-bootstrap'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

  <PageHeader>Hola!</PageHeader>
  <div className="container">
  <Jumbotron inverse>
    <h1>Bienvenido a Bloguealo!</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  </Jumbotron>
  </div>

      </div>

    );
  }
}

export default App;
