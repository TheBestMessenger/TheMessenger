import "./Message.css";

const Message = (props) => {
    const {text, fromMe, time} = props;
    return (
        <>
            <div className={`message ${fromMe ? 'out-message' : 'in-message'}`}>
                <p className="text-content"> {text} </p>
                <span className="message-time"> {time} </span>
            </div>
        </>
    );
}

export default Message;