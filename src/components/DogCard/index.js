import React from "react";
import "./style.css";

const DogCard = (props) => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <ul>
        <li>
        <img alt={props.id} src={props.image} width="350" height="280" />
        </li>
      </ul>
     
      
    </div>
  </div>
);


export default DogCard;
