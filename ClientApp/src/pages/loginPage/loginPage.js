import React, { Component } from 'react';
import { LoginForm } from '../../components/loginForm.js';


export class LoginPage extends Component {

  render () {
    return (
      <div className="container">
        <h1 className="text-center">uText</h1>
        <LoginForm />
      </div>
    );
  }
}
