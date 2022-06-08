import './ChatsPage.css';

import ChatTile from '../components/ChatTile/ChatTile';
import { PROFILE_PICTURES_PREFIX } from '../config';
import UserContext from '../contexts/UserContext';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserInfo from '../components/UserInfo/UserInfo';

const ChatsPage = () => {
  const userContext = useContext(UserContext);
  window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('bg-modal')) {
      document.querySelector('.bg-modal').style.display = 'none';
    }
  });

  const [userName, setUserName] = useState('Loading...');
  const [nickname, setNickname] = useState('Loading...');
  const [userPhone, setUserPhone] = useState('+38012345678');
  const [photo, setPhoto] = useState(
    'https://messenger-storage.s3.amazonaws.com/default/blank-profile-picture.png'
  );

  if (userContext.device_id === '') return <Navigate to='/login' />;

  return (
    <>
      <div className='el'>
        <h1 className='chats-logo'>Chats</h1>
        <div className='wrapper'>
          <UserInfo
            username={userName}
            nickname={nickname}
            telephone={userPhone}
            photo={photo}
            edit={true}
            setUserName={setUserName}
            setNickname={setNickname}
            setUserPhone={setUserPhone}
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
              imageLink={
                'https://messenger-storage.s3.amazonaws.com/default/blank-profile-picture.png'
              }
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
