import React, { Component } from 'react';
import './chatPage.css';

export class ChatPage extends Component {

  render () {
    return (
        <div className="container" id="chat-page-container">

            <div className="row" id="nav-row">
                <div class="col-6">
                    <h1>uText</h1>
                </div>
                <div class="col-6" id="logout-column">
                    <button className="btn btn-danger">Logout</button>
                </div>
            </div>

            <div className="row" id="jumbotron-row">
                <div className="jumbotron">
                    <p>hello</p>
                </div>
            </div>

            {/* <div className="jumbotron" id="chat-jumbotron">

                <div className="row" id="jumbotron-headers">
                    <div className="col-md-2">
                        <p className="text-center">Channels</p>
                    </div>
                    <div className="col-md-8">
                        <h2 className="text-center">CHANNEL NAME</h2>
                    </div>
                    <div className="col-md-2">
                        <h3 className="text-center">Active</h3>
                    </div>
                </div>
                <div className="row" id="jumbotron-content">
                    <div className="col-md-2">
                        <button className="btn">Channel Name 1</button>
                    </div>
                    <div className="col-md-8" id="chat-jumbotron-center-column">


                        <div className="container" id="chat-container">

                            <div id="chat-history">
                                <div className="author-and-text">
                                    <h6>Author</h6>
                                    <p>text</p>
                                </div>
                                <div className="author-and-text">
                                    <h6>Author</h6>
                                    <p>text</p>
                                </div>

                            </div>
                            
                            <form className="row" id="chat-form">
                                <input type="message" className="form-control col-md-10" placeholder="Write your message here"></input>
                                <button type="submit" class="btn btn-primary col-md-2">Send</button>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn">User1</button>
                    </div>
                </div>
            </div> */}
      </div>
    );
  }
}
