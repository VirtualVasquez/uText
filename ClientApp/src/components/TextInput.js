import React, { Component } from 'react';

export class TextInput extends Component {

    render () {
        return (
            <form className="row" id="chat-form">
                <input type="message" className="form-control col-md-10" placeholder="Write your message here"></input>
                <button type="submit" class="btn btn-primary col-md-2">Send</button>
            </form>
        );
        }
}