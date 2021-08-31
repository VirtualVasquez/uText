import React, { Component } from 'react';
import './chatPage.css';
import { TextBubble } from '../../components/TextBubble';
import { ChannelName } from '../../components/ChannelName';
import { Nav } from '../../components/Nav';
import { TextInput } from '../../components/TextInput';



export class ChatPage extends Component {

  render () {
    return (
      <div className="container">

        <Nav />
        <div className="jumbotron" id="chat-jumbotron">

            <div className="row" id="jumbotron-headers">
                <div className="col-md-3">
                    <h3 className="text-center">Channels</h3>
                </div>
                <div className="col-md-9">
                    <h2 className="text-center">CHANNEL NAME</h2>
                </div>
            </div>
            <div className="row" id="jumbotron-content">
                
                <div className="col-md-3">
                    <ChannelName/>
                </div>
                <div className="col-md-9" id="chat-jumbotron-center-column">
                    <div className="container" id="chat-container">

                        <div id="chat-history">
                            <TextBubble />
                        </div>
                        
                        <TextInput />

                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
