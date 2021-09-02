import React, { Component } from 'react';
import './chatPage.css';
import TextBubble from '../../components/TextBubble';
import { ChannelName } from '../../components/ChannelName';
import { Nav } from '../../components/Nav';
import TextInput from '../../components/TextInput';



export class ChatPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          userMessage:"",
          textMessages:[]
      };
      this.handleChange = this.handleChange.bind(this);
      this.pushMessage = this.pushMessage.bind(this);

  }

  handleChange(event){
      this.setState({
          userMessage: event.target.value
      })
  }

  pushMessage(){
      if(this.state.userMessage){
         this.setState({
             textMessages:
             [...this.state.textMessages, 
                this.state.userMessage]
        })
      }
      this.setState({userMessage:""})
  }
  
  renderMessages(){
      return this.state.textMessages.map((item) => (
          <TextBubble
            key={item.id}
            message={item}
          />
      ))
  }

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
                            {this.renderMessages()}
                        </div>
                        
                        <TextInput
                            handleChange={this.handleChange}
                            pushMessage={this.pushMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
