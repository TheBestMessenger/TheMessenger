import "./DMPage.css";

import { useState } from "react";
import { useParams } from "react-router-dom";
import DMHeader from "../components/DMHeader/DMHeader"
import DMInput from "../components/DMInput/DMInput"
import Message from "../components/Message/Message"
import { PROFILE_PICTURES_PREFIX } from "../config"

const DMPage = (props) => {
    const { username } = useParams();
    let [messages, setMessages] = useState([
        { me: false, msg: "Hello", time: '14:41:59'},
        { me: true, msg: "Hi", time: '14:42:30' },
        { me: false, msg: "How are you?", time: "14:43:02"},
        { me: true, msg: "All right!", time: "14:44:15"},
    ]);
    const handleMessage = (msg) => {
        setMessages([
            ...messages, {
                me: true, msg: msg, time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
            }
        ])
    }
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
                    />
                )
            }
            </div>
            <DMInput
                handleMessage={handleMessage}
            />
        </>
    );
}

export default DMPage;