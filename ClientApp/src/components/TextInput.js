import React from 'react';

const TextInput = props => {

    return (
        <div className="row" id="chat-form">
                <input 
                    type="message" 
                    className="form-control col-md-10" 
                    placeholder="Write your message here"
                    onChange={props.handleChange}
                    ></input>
                <button 
                    onClick={props.pushMessage}
                    class="btn btn-primary col-md-2"
                    >
                        Send
                    </button>
        </div>
    );
        
}

export default TextInput;