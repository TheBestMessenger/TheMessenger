import './DMHeader.css';
import UserInfo from '../UserInfo/UserInfo';

import { Link } from 'react-router-dom';

const DMHeader = (props) => {
  const { goBackLink, chatTitle } = props;
  return (
    <header className='header'>
      <Link className={'back-to-chats'} to={goBackLink}>
        <p className={'return-chats-text'}> Back to chats </p>
      </Link>
      <div className='user'>
        <span className='user-name'> {chatTitle} </span>
        <span className='status'>last seen recently</span>
      </div>
      <UserInfo
        username={props.chatUsername}
        nickname={props.chatTitle}
        telephone='+380681234567'
        photo={props.imageLink}
      />
    </header>
  );
};

export default DMHeader;
