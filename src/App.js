import './App.css';
import DMPage from './pages/DMPage';
import ChatsPage from './pages/ChatsPage';
import ErrorNotFound from './pages/ErrorNotFound';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { useEffect, useRef, useState } from 'react';
import { BACKEND_SERVER_ROOT } from './config';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const deviceIdRef = useRef('');
  const lastVersionRef = useRef(0);
  const loadingRef = useRef(false);
  const chatsRef = useRef([]);
  const [userInfo, setUserInfo] = useState({ chats: [], device_id: '' });

  const updateDeviceId = (device_id) => {
    deviceIdRef.current = device_id;
    setUserInfo({ ...userInfo, device_id: device_id });
  };

  useEffect(() => {
    // fetch messages periodically
    const fetcher = () => {
      if (loadingRef.current) return;
      loadingRef.current = true;
      if (deviceIdRef.current === '') {
        loadingRef.current = false;
        return;
      }
      fetch(BACKEND_SERVER_ROOT + 'getChats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          device_id: deviceIdRef.current,
          lastVersion: lastVersionRef.current,
        }),
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          (async () => {
            try {
              console.log('Response error: ' + (await response.json()).error);
            } catch (error) {
              console.log('Error response decode error: ', error);
            }
          })();
        })
        .catch((err) => {
          loadingRef.current = false;
          console.log('Message fetching error: ', err);
        })
        .then((data) => {
          if (!data) {
            loadingRef.current = false;
            return;
          }
          lastVersionRef.current = data.version;
          if (
            data.delta.length === 0 &&
            data.deleted.length === 0 &&
            data.edited.length === 0
          ) {
            loadingRef.current = false;
            return;
          }
          const chatsNew = chatsRef.current;
          for (const d_chat of data.delta) {
            const chatInd = chatsNew.findIndex(
              (chat) => chat.chat_id === d_chat.chat_id
            );
            if (chatInd === -1) {
              chatsNew.push(d_chat);
            } else {
              chatsNew[chatInd].chat_title = d_chat.chat_title;
              chatsNew[chatInd].chat_username = d_chat.chat_username;
              chatsNew[chatInd].messages = chatsNew[chatInd].messages.concat(
                d_chat.messages
              );
            }
          }
          const getIndexes = (chat_id, message_id) => {
            const chatInd = chatsNew.findIndex(
              (chat) => chat.chat_id === chat_id
            );
            const messageInd = chatsNew[chatInd].messages.findIndex(
              (message) => message.message_id === message_id
            );
            return { chatInd, messageInd };
          };
          for (const { chat_id, message_id, new_message } of data.edited) {
            try {
              const { chatInd, messageInd } = getIndexes(chat_id, message_id);
              chatsNew[chatInd].messages[messageInd].msg = new_message;
              chatsNew[chatInd].messages[messageInd].edited = true;
            } catch (_) {} // catch-all if messageInd/chatInd === -1 (shouldn't happen)
          }
          for (const { chat_id, message_id } of data.deleted) {
            try {
              const { chatInd, messageInd } = getIndexes(chat_id, message_id);
              if (messageInd !== -1) {
                chatsNew[chatInd].messages.splice(messageInd, 1);
              }
            } catch (_) {}
          }
          chatsRef.current = chatsNew;
          setUserInfo({
            ...userInfo,
            chats: chatsNew,
          });
          loadingRef.current = false;
        })
        .catch((err) => {
          console.log('Message fetching error (response unpack): ', err);
          loadingRef.current = false;
        });
    };
    fetcher();
    const handle = setInterval(fetcher, 500);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ ...userInfo, updateDeviceId, device_id: deviceIdRef.current }}
    >
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<ChatsPage />} />
          <Route path='/dm/:chat_username' element={<DMPage />} />
          <Route path='*' element={<ErrorNotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
