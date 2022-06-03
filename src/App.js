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
  const authorIdRef = useRef(uuidv4());
  const lastFetchVersion = useRef(-1);
  const [userInfo, setUserInfo] = useState({ chats: [], authorId: '' });

  useEffect(() => {
    // fetch messages periodically
    const fetcher = () => {
      fetch(BACKEND_SERVER_ROOT + 'getChats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorId: authorIdRef.current }),
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log('Message fetching error: ', err);
        })
        .then((data) => {
          if (data.version > lastFetchVersion.current) {
            setUserInfo({
              chats: data.chats,
              authorId: authorIdRef.current,
            });
            lastFetchVersion.current = data.version;
          }
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
    <UserContext.Provider value={userInfo}>
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
