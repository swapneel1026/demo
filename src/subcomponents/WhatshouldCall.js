import React from "react";
import "../subcomponentcss/WhatshouldCall.css";
import male from "../assets/male.svg";
import female from "../assets/female.svg";

const WhatshouldCall = () => {
  return (
    <div className="whatshouldcall-container">
      <p>Help us know you better!</p>
      <div className="onetwoThree">
        <div className="one">1</div>
        <span>--------</span>
        <div className="two">2</div>
        <span>--------</span>
        <div className="three">3</div>
      </div>
      <h1 className="heading-title">What should we call you?</h1>
      <input type="text" placeholder="Enter your name" />
      <h1 className="heading-title">Gender</h1>
      <div className="gender">
        <div className="male">
          <img src={male} alt="alt" />
        </div>
        <div className="female">
          <img src={female} alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default WhatshouldCall;
