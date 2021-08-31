import React, { Component } from 'react';

export class Nav extends Component {

    render () {
        return (
            <div className="row">
            <div class="col-6">
                <h1>uText</h1>
            </div>
            <div class="col-6" id="logout-column">
                <button className="btn btn-danger">Logout</button>
            </div>
        </div>
        );
    }
}