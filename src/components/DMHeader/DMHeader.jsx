import "./DMHeader.css";

import { Link } from "react-router-dom";

const DMHeader = (props) => {
  const { goBackLink, imageLink, chatTitle } = props;
  return (
    <header>
      <Link className={'back-to-chats'} to={goBackLink}>
        <p className={'return-chats-text'}> Back to chats </p>
      </Link>
      <div className="user">
        <span className="user-name"> {chatTitle} </span>
        <span className="status">last seen recently</span>
      </div>
      <img className="avatar" src={imageLink} />
    </header>
  );
};

export default DMHeader;
