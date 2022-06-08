import './ChatsPage.css';

import ChatTile from '../components/ChatTile/ChatTile';
import { PROFILE_PICTURES_PREFIX } from '../config';
import UserContext from '../contexts/UserContext';
import { useContext, useState } from 'react';
import UserInfo from '../components/UserInfo/UserInfo';

const ChatsPage = () => {
  const userContext = useContext(UserContext);
  window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('bg-modal')) {
      document.querySelector('.bg-modal').style.display = 'none';
    }
  });

  const [userName, setUserName] = useState('Apollo');
  const [nickname, setNickname] = useState('@qwerty');
  const [userPhone, setUserPhone] = useState('+38012345678');

  return (
    <>
      <div className='el'>
        <h1 className='chats-logo'>Chats</h1>
        <div className='wrapper'>
          <UserInfo
            username={userName}
            nickname={nickname}
            telephone={userPhone}
            photo={PROFILE_PICTURES_PREFIX + 'Apollo.png'}
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
              dmLink={'dm/' + chat.chat_title}
              imageLink={PROFILE_PICTURES_PREFIX + chat.chat_title + '.png'}
              lastMessage={chat.messages[chat.messages.length - 1].msg.slice(
                0,
                50
              )}
              time={chat.messages[chat.messages.length - 1].time.slice(0, 50)}
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
