import "./DMInput.css";

import { useState } from 'react';

const DMInput = (props) => {
    const { handleMessage } = props;
    const [ messageText, setMessageText ] = useState('');

    const handleSubmit = () => {
        handleMessage(messageText);
    }

    return (
        <div className = "input">
            <form onClick={handleSubmit}>
                <div className="cmd">
                    <textarea className="texta" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                </div>
                <button className="btn" type="submit" value="Submit">send</button>
            </form>
        </div>
    );
}

export default DMInput;