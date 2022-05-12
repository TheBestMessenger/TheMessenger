import "./ChatTile.css";

import { Link } from "react-router-dom";

const ChatTile = (props) => {
    const {dmLink, imageLink, chatTitle} = props;
    return (
        <Link to={dmLink}>
            <h1> {chatTitle} </h1>
            <img src={imageLink}></img>
        </Link>
    );
}

export default ChatTile;