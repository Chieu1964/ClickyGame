import React from "react";
import "./style.css";


// click




//pass the image into each card so all 12 are rendered

const DogCard = (props) => 
  (
    <div className="card">
      <div className="img-container">
        <img alt={props.image.replace(".jpg", "")} src={props.image}/>
      </div>
      <div className="content">
        <ul>
          <li>{props.id}</li>
          
          
        </ul>
      </div>
      <span onClick={() => props.removeDog(props.id)} className="remove">
        jkjjj
        </span>
    </div>
  );

export default DogCard;
