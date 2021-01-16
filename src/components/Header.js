import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="header">
            <FontAwesomeIcon icon="stopwatch" className="stopwatch" size="3x" />
            <div className="title">React Counter V2</div>
        </header>
    );
};

export default Header;
