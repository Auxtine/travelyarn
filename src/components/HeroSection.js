import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="hero-container">

      {/* backgound-video Section */}
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}

      {/* Headings */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      {/* Button Section */}
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} className="faPlayCircle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
