import './ChatsPage.css';

import ChatTile from '../components/ChatTile/ChatTile';
import UserContext from '../contexts/UserContext';
import { useContext, useState, useEffect, useRef } from 'react';
import { BACKEND_SERVER_ROOT } from '../config';
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

  const profileInfoLoadingRef = useRef(false);
  useEffect(() => {
    if (userContext.device_id === '') return;
    if (profileInfoLoadingRef.current) return;
    profileInfoLoadingRef.current = true;
    fetch(BACKEND_SERVER_ROOT + '/getProfile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        device_id: userContext.device_id,
      }),
    })
      .then(async (response) => {
        profileInfoLoadingRef.current = false;
        try {
          if (response.status === 200) {
            const profileMeta = await response.json();
            setUserName(profileMeta.name);
            setNickname(profileMeta.username);
            setPhoto(profileMeta.profile_picture);
          } else if (response.status === 400) {
            const errorText = await response.json();
            console.log('Unhandled 400 error');
            console.log(errorText);
          }
        } catch (error) {
          console.log('Json parse error');
          console.log(error);
        }
      })
      .catch(() => {
        profileInfoLoadingRef.current = false;
      });
  }, []);

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
