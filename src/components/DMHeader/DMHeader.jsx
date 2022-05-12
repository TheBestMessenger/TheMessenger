import "./DMHeader.css";

import { Link } from "react-router-dom";

const DMHeader = (props) => {
    const {goBackLink, imageLink, chatTitle} = props;
    return (
        <Link to={goBackLink}>
            <h1> {chatTitle} </h1>
            <img src={imageLink}></img>
        </Link>
    );
}

export default DMHeader;