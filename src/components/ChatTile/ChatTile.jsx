import "./ChatTile.css";

import { Link } from "react-router-dom";


const ChatTile = (props) => {
    const {dmLink, imageLink, chatTitle} = props;
    return (
        <Link to={dmLink}>
        <ul>
            <li>
                <div class="friend">
                    <div class="img-name">
                    <img class = "ava"src={imageLink}></img>
                    <div>

                        <h1> {chatTitle} </h1>
                        <p> kkkkkgok hjfohjg iofhjioghj ofj ghjgject joing whire tgtgj odfmgoko </p>
                        
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