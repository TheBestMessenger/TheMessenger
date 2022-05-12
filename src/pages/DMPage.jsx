import "./DMPage.css";

import React from "react";
import { Link } from "react-router-dom";

const DMPage = () => {
    return (
        <>
            <h1>DM</h1>
            <Link to="/">
                <button>Get Back</button>
            </Link>
        </>
    );
}

export default DMPage;