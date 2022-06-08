import './DMPage.css';
import { useRef, useEffect, useContext, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BACKEND_SERVER_ROOT } from '../config';

import DMHeader from '../components/DMHeader/DMHeader';
import DMInput from '../components/DMInput/DMInput';
import Message from '../components/Message/Message';
import ContextMenu from '../components/Message/ContextMenu';
import UserContext from '../contexts/UserContext';

const DMPage = () => {
  const sendLoadingRef = useRef(false);
  const editLoadingRef = useRef(false);
  const deleteLoadingRef = useRef(false);
  const userContext = useContext(UserContext);

  if (userContext.device_id === '') return <Navigate to='/login' />;

  const { chat_username } = useParams();
  const [chatInd, setChatInd] = useState(-2);

  useEffect(() => {
    setChatInd(
      userContext.chats.findIndex(
        (chat) => chat.chat_username === chat_username
      )
    );
  });

  const createChatLoadingRef = useRef(false);
  useEffect(() => {
    if (chatInd !== -1) return;
    if (userContext.device_id === '') return;
    if (createChatLoadingRef.current) return;
    createChatLoadingRef.current = true;
    fetch(BACKEND_SERVER_ROOT + '/createChat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        device_id: userContext.device_id,
        receiver_username: chat_username,
      }),
    })
      .then(async (response) => {
        createChatLoadingRef.current = false;
        try {
          if (response.status === 400) {
            const errorText = await response.json();
            console.log('Unhandled 400 error');
            console.log(errorText);
          }
        } catch (error) {
          console.log('Unhandled 400 error json parse error');
          console.log(error);
        }
      })
      .catch(() => {
        createChatLoadingRef.current = false;
      });
  }, [chatInd]);

  const chatTitle = chatInd >= 0 ? userContext.chats[chatInd].chat_title : '';
  const chatUsername =
    chatInd >= 0 ? userContext.chats[chatInd].chat_username : '';
  const chatId = chatInd >= 0 ? userContext.chats[chatInd].chat_id : '';
  const messages = chatInd >= 0 ? userContext.chats[chatInd].messages : [];

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  const handleMessageSend = (msg) => {
    if (sendLoadingRef.current) return;
    sendLoadingRef.current = true;
    fetch(BACKEND_SERVER_ROOT + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        device_id: userContext.device_id,
        chat_id: chatId,
        message: msg,
      }),
    })
      .then(async (response) => {
        sendLoadingRef.current = false;
        try {
          if (response.status === 400) {
            const errorText = await response.json();
            console.log('Unhandled 400 error');
            console.log(errorText);
          }
        } catch (error) {
          console.log('Unhandled 400 error json parse error');
          console.log(error);
        }
      })
      .catch(() => {
        sendLoadingRef.current = false;
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
      if (editLoadingRef.current) return;
      editLoadingRef.current = true;
      fetch(BACKEND_SERVER_ROOT + '/editMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          device_id: userContext.device_id,
          chat_id: chatId,
          message_id: message_id,
          new_message: new_msg,
        }),
      })
        .then(async (response) => {
          editLoadingRef.current = false;
          try {
            if (response.status === 400) {
              const errorText = await response.json();
              console.log('Unhandled 400 error');
              console.log(errorText);
            }
          } catch (error) {
            console.log('Unhandled 400 error json parse error');
            console.log(error);
          }
        })
        .catch(() => {
          editLoadingRef.current = false;
        });
      setEditMode(false);
    };
    setEditMode(true);
  };

  const handleMessageEdit = (msg) => {
    sendEditRequest.current(msg);
  };

  const handleDelete = (message_id) => {
    if (deleteLoadingRef.current) return;
    deleteLoadingRef.current = true;
    fetch(BACKEND_SERVER_ROOT + '/deleteMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        device_id: userContext.device_id,
        chat_id: chatId,
        message_id: message_id,
      }),
    })
      .then(async (response) => {
        deleteLoadingRef.current = false;
        try {
          if (response.status === 400) {
            const errorText = await response.json();
            console.log('Unhandled 400 error');
            console.log(errorText);
          }
        } catch (error) {
          console.log('Unhandled 400 error json parse error');
          console.log(error);
        }
      })
      .catch(() => {
        deleteLoadingRef.current = false;
      });
  };

  const [chatImage, setChatImage] = useState(
    'https://messenger-storage.s3.amazonaws.com/default/blank-profile-picture.png'
  );

  const messageToEdit = Array.isArray(messages)
    ? messages.find((it) => it.message_id === cmMessageId.current)
    : 0;

  return (
    <>
      <DMHeader
        goBackLink='/'
        chatTitle={chatTitle}
        chatUsername={chatUsername}
        imageLink={chatImage}
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
        editMode={editMode}
        messageToEdit={messageToEdit}
      />
      <div ref={messagesEndRef}>
        <></>
      </div>
    </>
  );
};

export default DMPage;
