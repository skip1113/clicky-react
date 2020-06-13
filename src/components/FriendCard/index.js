import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={props.handleIncrement}>
      <div className="img-container" onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} src={props.image} className={`click-item${props.shake ? " shake" : ""}`} />
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
