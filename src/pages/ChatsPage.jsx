import './ChatsPage.css';

import { Navigate } from 'react-router-dom';
import ChatTile from '../components/ChatTile/ChatTile';
import { PROFILE_PICTURES_PREFIX } from '../config';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import UserInfo from '../components/UserInfo/UserInfo';

const ChatsPage = () => {
  const userContext = useContext(UserContext);
  window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('bg-modal')) {
      document.querySelector('.bg-modal').style.display = 'none';
    }
  });

  if (userContext.device_id === '') return <Navigate to='/login' />;

  return (
    <>
      <div className='el'>
        <h1 className='chats-logo'>Chats</h1>
        <div className='wrapper'>
          <UserInfo
            username='Apollo'
            nickname='@qwerty'
            telephone='3809997126'
            photo={PROFILE_PICTURES_PREFIX + 'Apollo.png'}
          />
        </div>
      </div>
      <div className={'chats-container'}>
        {userContext.chats.length !== 0 ? (
          userContext.chats.map((chat) => (
            <ChatTile
              key={chat.chat_id}
              chatTitle={chat.chat_title}
              dmLink={'dm/' + chat.chat_username}
              imageLink={PROFILE_PICTURES_PREFIX + chat.chat_username + '.png'}
              lastMessage={
                chat.messages.length > 0
                  ? chat.messages[chat.messages.length - 1].msg.slice(0, 50)
                  : 'Empty Chat'
              }
              time={
                chat.messages.length > 0
                  ? chat.messages[chat.messages.length - 1].time
                  : ''
              }
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ChatsPage;
