import React, { Component } from 'react';
import { LoginPage } from './pages/loginPage/loginPage.js';
import { ChatPage } from './pages/chatPage/chatPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {

  render () {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Router path="/chat">
              <ChatPage />
            </Router>
          </Switch>
        </div>
      </Router>
    );
  }
}
