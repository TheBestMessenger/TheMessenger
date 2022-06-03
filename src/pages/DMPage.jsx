import "./DMPage.css";
import { useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_SERVER_ROOT, PROFILE_PICTURES_PREFIX } from "../config"

import DMHeader from "../components/DMHeader/DMHeader"
import DMInput from "../components/DMInput/DMInput"
import Message from "../components/Message/Message"
import UserContext from "../contexts/UserContext";

const DMPage = () => {
    const userContext = useContext(UserContext);
    const { chat_id } = useParams();
    const messages = userContext.chats.length !== 0 ? userContext.chats[
        userContext.chats.findIndex((chat) => chat.chat_id === chat_id)].messages : [];

    // scrollToBottom
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleMessage = (msg) => {
        fetch(BACKEND_SERVER_ROOT + chat_id + "/sendMessage", {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                authorId: userContext.authorId, message: msg
            })
        }).then(() => {
            scrollToBottom();
        }).catch(() => {
            scrollToBottom();
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, []);

    return (
        <>
            <DMHeader
                goBackLink="/"
                chatTitle={chat_id}
                imageLink={"../" + PROFILE_PICTURES_PREFIX + chat_id + ".png"}
            />
            <div className="message-container">
                {
                    messages.map((message, id) =>
                        <Message
                            key={id}
                            text={message.msg}
                            fromMe={message.me}
                            time={message.time}
                            edited={message.edited}
                        />
                    )
                }
            </div>
            <DMInput
                handleMessage={handleMessage}
            />
            <div ref={messagesEndRef}><></></div>
        </>
    );
}

export default DMPage;