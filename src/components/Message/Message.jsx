import "./Message.css";

const Message = (props) => {
    const {text, fromMe, time} = props;
    let read = true;
    if (fromMe) {
        return (
            <>
                <div className={`message out-message`}>
                    <p className="message-text-container"> {text} </p>
                    <span className="message-time"> {time} <img className={'message-tick-icon'}
                                                                src={`/icons/${read ? 'read' : 'delivered'}.svg`}
                                                                alt={'tick icon'}/> </span>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={`message in-message`}>
                    <p className="message-text-container"> {text} </p>
                    <span className="message-time"> {time} </span>
                </div>
            </>
        );
    }
}

export default Message;