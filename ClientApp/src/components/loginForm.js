import React, { Component } from 'react';

export class LoginForm extends Component {

  render () {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Only U Can Choose To Text</h2>
            <form>
              <div className="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="username" class="form-control" id="username" aria-describedby="usernameHelp"></input>
              </div>
              <div className="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="passwordHelp"></input>
              </div>
              <button type="submit" class="btn col-md-12 btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <button class="btn btn-danger col-md-6">Create An Account</button>
            <button class="btn btn-secondary col-md-6">Continue As Guest</button>
          </div>
        </div>
      </div>
    );
  }
}
