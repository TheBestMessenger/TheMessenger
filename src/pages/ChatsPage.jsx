import "./ChatsPage.css";

import React from "react";
import { Link } from "react-router-dom";

const ChatsPage = () => {
    return (
        <>
            <h1>Chats</h1>
            <Link to="/dm">
                <button>DM</button>
            </Link>
        </>
    );
}

export default ChatsPage;