import "./DMPage.css";
import { useState, useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PROFILE_PICTURES_PREFIX } from "../config"

import DMHeader from "../components/DMHeader/DMHeader"
import DMInput from "../components/DMInput/DMInput"
import Message from "../components/Message/Message"
import MessageContext from "../contexts/MessageContext";

const DMPage = () => {
    const messageContext = useContext(MessageContext);
    const { chat_id } = useParams();
    let [messages, setMessages] = useState(
        messageContext.length !== 0 ? messageContext[
            messageContext.findIndex((chat) => chat.chat_id === chat_id)].messages : []
    );
    const handleMessage = (msg) => {
        setMessages([
            ...messages, {
                me: true, msg: msg, time: new Date().getHours() + ':' + new Date().getMinutes()
            }
        ])
    };

    // scrollToBottom
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(scrollToBottom, [messages]);

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