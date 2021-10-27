import React from 'react';

const TextBubble = props => {
    return (
        <div className="TextBubble">
            <h6>Author</h6>
            <p>{props.message}</p>
        </div>
    );
}

export default TextBubble;