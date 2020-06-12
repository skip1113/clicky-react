import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={props.handleIncrement}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          
        </ul>
      </div>
      {/* <span onClick={() => props.handleIncrement()} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
