import './App.css';
import { v4 as uuidv4 } from 'uuid';
import DMPage from "./pages/DMPage";
import ChatsPage from "./pages/ChatsPage";
import ErrorNotFound from "./pages/ErrorNotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MessageContext from './contexts/MessageContext';
import { useEffect, useRef, useState } from 'react';
import { BACKEND_SERVER_ROOT } from './config';

function App() {
  const authorIdRef = useRef(uuidv4());
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    // fetch messages periodically
    const fetcher = () => {
      fetch(BACKEND_SERVER_ROOT + "getChats", {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({authorId: authorIdRef.current})
      })
      .then(response => response.json())
      .then(data => setChatList(data.chats));
    }
    fetcher();
    const handle = setInterval(fetcher, 500);
    return () => {
      clearInterval(handle);
    }
  }, []);

  return (
    <MessageContext.Provider value={chatList}>
      <Router>
        <Routes>
          <Route path="/" element={<ChatsPage />} />
          <Route path="/dm/:username" element={<DMPage />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </Router>
    </MessageContext.Provider>
  );
}

export default App;
