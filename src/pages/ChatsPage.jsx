import "./ChatsPage.css";

import ChatTile from "../components/ChatTile/ChatTile"
import { PROFILE_PICTURES_PREFIX } from "../config"
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const ChatsPage = () => {
    const userContext = useContext(UserContext);
    return (
        <>
            <h1>Chats</h1>
            {
                userContext.chats.length !== 0 ? userContext.chats.map((chat) =>
                    <ChatTile
                        key={chat.chat_id}
                        chatTitle={chat.chat_title}
                        dmLink={"dm/" + chat.chat_title}
                        imageLink={PROFILE_PICTURES_PREFIX + chat.chat_title + ".png"}
                        lastMessage={chat.messages[chat.messages.length - 1].msg.slice(0, 50)}
                    />
                ) : <p>Loading...</p>
            }
        </>
    );
}

export default ChatsPage;