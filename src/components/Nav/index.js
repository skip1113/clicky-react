import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
    return (
        <nav className="navbar">

        <span>
            <h1 className="brand">React Clicky Game</h1>

            <NavMessage count={props.count} topScore={props.topScore} />
            <h2 className="scoring">
                Score: {props.count} | Top Score: {props.topScore}
            </h2>
        </span>
        </nav>
    );
}

export default Nav;