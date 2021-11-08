import React from 'react';

    const TextInput = props => {

    return (
        <div className="row" id="chat-form">
                <input 
                    type="message" 
                    className="form-control col-md-10" 
                    placeholder="Write your message here"
                    value={props.userMessage}
                    onChange={props.handleChange}
                    ></input>
                <button 
                    type="submit"
                    onClick={props.pushMessage}
                    class="btn btn-primary col-md-2"
                > 
                    Send
                </button>
        </div>
    );
        
}

export default TextInput;