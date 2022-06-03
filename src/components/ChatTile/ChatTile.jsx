import "./ChatTile.css";

import {Link} from "react-router-dom";

const ChatTile = (props) => {
    const {dmLink, imageLink, chatTitle, lastMessage, time} = props;
    return (
        <Link to={dmLink}>
            <div className="friend">
                <div className="img-name">
                    <img className="ava" src={imageLink} alt={"user photo"}/>
                    <div className="recent-messages">
                        <h1 className="username-chats"> {chatTitle} </h1>
                        <p> {lastMessage} </p>
                    </div>
                </div>
                <div class="time">
                    <p class="time">{time}</p>
                </div>
            </div>
        </Link>
    );
};

export default ChatTile;
