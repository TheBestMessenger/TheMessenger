import "./ChatTile.css";

import { Link } from "react-router-dom";


const ChatTile = (props) => {
    const {dmLink, imageLink, chatTitle, lastMessage} = props;

    
    return (
        // <div>
        //     <p>Hello kgj kfjgj fogjofh ogojf hgfh ghfojg jfhg </p>
        // </div>
        <Link to={dmLink}>
        {/* <script src ="functionality.js"> </script> */}
        <ul>
            <li>
                <div className="friend">
                    <div className="img-name">
                    <img className = "ava"src={imageLink}></img>
                    <div>

                        <h1> {chatTitle} </h1>
                        <p className="message-text"> {lastMessage} </p>
                        
                    </div>
                     
                    </div>
                    <div className="time"><h2 className="p1">10:50</h2></div>
                </div>
            </li>
        </ul>
        </Link>

    );
}

export default ChatTile;