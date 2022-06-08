import './App.css';
import { v4 as uuidv4 } from 'uuid';
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
  const [userInfo, setUserInfo] = useState({ chats: [], device_id: '' });

  const updateDeviceId = (device_id) => {
    deviceIdRef.current = device_id;
  };

  useEffect(() => {
    // fetch messages periodically
    const fetcher = () => {
      if (deviceIdRef.current === '') return;
      fetch(BACKEND_SERVER_ROOT + 'getChats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          device_id: deviceIdRef.current,
          lastVersion: lastVersionRef.current,
        }),
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log('Message fetching error: ', err);
        })
        .then((data) => {
          lastVersionRef.current = data.version;
          const chatsNew = userInfo.chats.concat(data.delta);
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
          setUserInfo({
            ...userInfo,
            chats: chatsNew,
          });
        })
        .catch((err) => {
          console.log('Message fetching error (response unpack): ', err);
        });
    };
    fetcher();
    const handle = setInterval(fetcher, 500);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <UserContext.Provider value={{ ...userInfo, updateDeviceId }}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<ChatsPage />} />
          <Route path='/dm/:chat_id' element={<DMPage />} />
          <Route path='*' element={<ErrorNotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
