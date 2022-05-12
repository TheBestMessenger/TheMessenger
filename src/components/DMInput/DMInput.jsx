import "./DMInput.css";

import { useState } from 'react';

const DMInput = (props) => {
    const { handleMessage } = props;
    const [ messageText, setMessageText ] = useState("");

    const handleChange = (event) => {
        setMessageText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleMessage(messageText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={messageText} onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default DMInput;