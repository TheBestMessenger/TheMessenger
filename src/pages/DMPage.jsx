import "./DMPage.css";
import { useRef, useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_SERVER_ROOT, PROFILE_PICTURES_PREFIX } from "../config";

import DMHeader from "../components/DMHeader/DMHeader";
import DMInput from "../components/DMInput/DMInput";
import Message from "../components/Message/Message";
import ContextMenu from "../components/Message/ContextMenu";
import UserContext from "../contexts/UserContext";

const DMPage = () => {
  const userContext = useContext(UserContext);
  const { chat_id } = useParams();
  const messages =
    userContext.chats.length !== 0
      ? userContext.chats[
          userContext.chats.findIndex((chat) => chat.chat_id === chat_id)
        ].messages
      : [];

  // scrollToBottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessage = (msg) => {
    fetch(BACKEND_SERVER_ROOT + chat_id + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authorId: userContext.authorId,
        message: msg,
      }),
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [userContext]);

  const menuRef = useRef(null);
  const [xPos, setXPos] = useState("");
  const [yPos, setYPos] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  document.addEventListener("contextmenu", (event) => {
    if (event.target.classList.contains("message")) event.preventDefault();
    if (event.target.classList.contains("out-message")) {
      setXPos(event.pageX + "px");
      setYPos(event.pageY + "px");
      setShowMenu(true);
    }
  });
  document.addEventListener("click", (event) => {
    event.preventDefault();
    setShowMenu(false);
  });

  return (
    <>
      <DMHeader
        goBackLink="/"
        chatTitle={chat_id}
        imageLink={"../" + PROFILE_PICTURES_PREFIX + chat_id + ".png"}
      />
      <div
        style={{ position: "absolute", top: yPos, left: xPos }}
        ref={menuRef}
      >
        {showMenu ? <ContextMenu /> : ""}
      </div>
      <div className="message-container">
        {messages.map((message, id) => (
          <Message
            key={id}
            text={message.msg}
            fromMe={message.me}
            time={message.time}
            edited={message.edited}
          />
        ))}
      </div>
      <DMInput handleMessage={handleMessage} />
      <div ref={messagesEndRef}>
        <></>
      </div>
    </>
  );
};

export default DMPage;
