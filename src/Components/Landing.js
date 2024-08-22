import React from "react";
import "../Styles/Cards.css";
import Button from "./Button";
import Slideshow from "./slideshow"; // Import the Slideshow component
import pixelPlace from "../Assets/computer.png";
import pixelPlant from "../Assets/flower.png";

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="big">Shelf Life - save your local library!</h1>

      <div>
        <h2><i>Shelf Life</i> is an interactive library simulation management game.</h2>
        <p>
          It's also a love letter to libraries and the people who run them. It's a game about empathy, third spaces, connection,
          and learning how to love a community that might not always love you back.<br/><br/>Players take 
          on the role of a librarian working in a fractured community where events and dialogue throughout 
          the game highlight the critical role of libraries as a space for education, empathy, and 
          human connection. 
        </p>
        <Button text="Play Now" />
      </div>

      <img className="comp" src={pixelPlace} alt="Library pixel art"/>
      <img className="plant" src={pixelPlant} alt="Pixel art plant"/>
    </div>
  );
}

export default Landing;
