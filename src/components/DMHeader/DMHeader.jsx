import "./DMHeader.css";

import { Link } from "react-router-dom";

const DMHeader = (props) => {
  const { goBackLink, imageLink, chatTitle } = props;
  return (
    <header>
      <Link to={goBackLink}>
        <span className="return">Back to chats</span>
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
