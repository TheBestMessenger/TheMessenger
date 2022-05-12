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
        { me: false, msg: "Hello" },
        { me: true, msg: "Hi" },
        { me: false, msg: "How are you?" },
        { me: true, msg: "All right!" },
    ]);
    const handleMessage = (msg) => {
        setMessages([
            ...messages, {
                me: true, msg: msg
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
            {
                messages.map((message, id) =>
                    <Message
                        key={id}
                        text={message.msg}
                        fromMe={message.me}
                    />
                )
            }
            <DMInput
                handleMessage={handleMessage}
            />
        </>
    );
}

export default DMPage;