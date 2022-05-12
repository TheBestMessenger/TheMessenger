import "./Message.css";

import { Link } from "react-router-dom";

const Message = (props) => {
    const {text, fromMe} = props;
    return (
        <>
            {
                fromMe ?
                <h1> {"me:" +text} </h1> :
                <h1> {text} </h1>
            }
        </>
    );
}

export default Message;