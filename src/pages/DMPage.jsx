import "./DMPage.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PROFILE_PICTURES_PREFIX } from "../config"

import DMHeader from "../components/DMHeader/DMHeader"
import DMInput from "../components/DMInput/DMInput"
import Message from "../components/Message/Message"

const DMPage = () => {
    const { username } = useParams();
    let [messages, setMessages] = useState([
        { me: false, msg: "Hello", time: '14:41'},
        { me: true, msg: "Hi", time: '14:42' },
        { me: false, msg: "How are you?", time: "14:43"},
        { me: true, msg: "All right!", time: "14:44"},
    ]);
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
                chatTitle={username}
                imageLink={"../" + PROFILE_PICTURES_PREFIX + username + ".png"}
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