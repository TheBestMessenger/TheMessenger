import "./Message.css";

// import { Link } from "react-router-dom";

const Message = (props) => {
    const {text, fromMe, time} = props;
    return (
        <>
            {
                fromMe ?
                    <div className="message out-message">
                        <p className="text-content"> {text} </p>
                        <span className="message-time"> {time} </span>
                    </div> :
                    <div className="message in-message">
                        <p className="text-content"> {text} </p>
                        <span className="message-time"> {time} </span>
                    </div>
            }
        </>
    );
}

export default Message;