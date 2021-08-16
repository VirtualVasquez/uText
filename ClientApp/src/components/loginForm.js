import React, { Component } from 'react';

export class LoginForm extends Component {

  render () {
    return (
      // <div className="jumbotron">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Only U Can Choose To Text</h2>
            <form id="signInForm">
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
        /* <div className="row">
          <div className="col-md-6 offset-md-3">            
            <button class="btn btn-secondary col-md-6">Continue As Guest</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#createAccountModal" class="btn btn-danger col-md-6">Create An Account</button>
            <div class="modal fade" id="createAccountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form id="signUpForm">
                    <div className="mb-3">
                      <label for="username" class="form-label">Username</label>
                      <input type="username" class="form-control" id="username" aria-describedby="usernameHelp"></input>
                    </div>
                    <div className="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" aria-describedby="passwordHelp"></input>
                    </div>
                  </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
    );
  }
}
