import "./ChatsPage.css";

import ChatTile from "../components/ChatTile/ChatTile"
import { PROFILE_PICTURES_PREFIX } from "../config"
import MessageContext from "../contexts/MessageContext";
import { useContext } from "react";

const ChatsPage = () => {
    const messageContext = useContext(MessageContext);
    return (
        <>
            <h1>Chats</h1>
            {
                messageContext.length !== 0 ? messageContext.map((chat) =>
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