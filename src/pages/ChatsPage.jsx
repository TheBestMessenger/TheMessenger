import "./ChatsPage.css";

import ChatTile from "../components/ChatTile/ChatTile"
import { PROFILE_PICTURES_PREFIX } from "../config"

const ChatsPage = () => {
    const usernames = [
        "Apollo", "Elizabeth", "Evgen", "Jake",
        "Jane", "Javelina", "Marie", "Martha"
    ]
    return (
        <>
            <h1>Chats</h1>
            {
                usernames.map((username, id) =>
                    <ChatTile
                        key={id}
                        chatTitle={username}
                        dmLink={"dm/" + username}
                        imageLink={PROFILE_PICTURES_PREFIX + username + ".png"}
                    />
                )
            }
        </>
    );
}

export default ChatsPage;