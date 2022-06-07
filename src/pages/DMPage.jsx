import './DMPage.css';
import { useRef, useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_SERVER_ROOT, PROFILE_PICTURES_PREFIX } from '../config';

import DMHeader from '../components/DMHeader/DMHeader';
import DMInput from '../components/DMInput/DMInput';
import Message from '../components/Message/Message';
import ContextMenu from '../components/Message/ContextMenu';
import UserContext from '../contexts/UserContext';

const DMPage = () => {
  const userContext = useContext(UserContext);
  const { chat_id } = useParams();
  const currentChat =
    userContext.chats[
      userContext.chats.findIndex((chat) => chat.chat_id === chat_id)
    ];
  const messages = userContext.chats.length !== 0 ? currentChat.messages : [];

  // scrollToBottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMessageSend = (msg) => {
    fetch(BACKEND_SERVER_ROOT + chat_id + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
  const xPos = useRef('');
  const yPos = useRef('');
  const cmMessageId = useRef('');
  const [showMenu, setShowMenu] = useState(false);

  document.addEventListener('contextmenu', (event) => {
    if (event.target.classList.contains('message')) event.preventDefault();
    if (
      event.target.classList.contains('out-message') ||
      event.target.parentElement.classList.contains('out-message')
    ) {
      xPos.current = event.pageX + 'px';
      yPos.current = event.pageY + 'px';
      cmMessageId.current =
        event.target.getAttribute('message_id') ||
        event.target.parentElement.getAttribute('message_id');
      setShowMenu(true);
    }
  });
  document.addEventListener('click', (event) => {
    event.preventDefault();
    setShowMenu(false);
  });

  const sendEditRequest = useRef(() => {});
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (message_id) => {
    sendEditRequest.current = (new_msg) => {
      fetch(BACKEND_SERVER_ROOT + chat_id + '/editMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorId: userContext.authorId,
          message_id: message_id,
          new_msg: new_msg,
        }),
      });
      setEditMode(false);
    };
    setEditMode(true);
  };

  const handleMessageEdit = (msg) => {
    sendEditRequest.current(msg);
  };

  const handleDelete = (message_id) => {
    fetch(BACKEND_SERVER_ROOT + chat_id + '/deleteMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        authorId: userContext.authorId,
        message_id: message_id,
      }),
    });
  };

  return (
    <>
      <DMHeader
        goBackLink='/'
        chatTitle={currentChat.chat_title}
        imageLink={
          '../' + PROFILE_PICTURES_PREFIX + currentChat.chat_title + '.png'
        }
      />
      <div
        style={{ position: 'absolute', top: yPos.current, left: xPos.current }}
        ref={menuRef}
      >
        {showMenu ? (
          <ContextMenu
            message_id={cmMessageId.current}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ) : (
          ''
        )}
      </div>
      <div className='message-container'>
        {messages.map((message) => (
          <Message
            key={message.message_id}
            text={message.msg}
            fromMe={message.me}
            time={message.time}
            edited={message.edited}
            message_id={message.message_id}
          />
        ))}
      </div>
      <DMInput
        handleMessage={editMode ? handleMessageEdit : handleMessageSend}
        sendText={editMode ? 'edit' : 'send'}
      />
      <div ref={messagesEndRef}>
        <></>
      </div>
    </>
  );
};

export default DMPage;
