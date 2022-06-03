import "./ChatTile.css";

import { Link } from "react-router-dom";


const ChatTile = (props) => {
    const {dmLink, imageLink, chatTitle, lastMessage} = props;
    return (
        <Link to={dmLink}>
        <ul>
            <li>
                <div className="friend">
                    <div className="img-name">
                    <img className = "ava" src={imageLink} alt={'user photo'}/>
                    <div>

                        <h1> {chatTitle} </h1>
                        <p> {lastMessage} </p>
                        
                    </div>
                     
                    </div>
                    <div class="time"><h2 class="p1">10:50</h2></div>
                </div>
            </li>
        </ul>
        </Link>
    );
}

export default ChatTile;