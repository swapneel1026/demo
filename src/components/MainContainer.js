import React from "react";
import "../css/MainContainer.css";
import rectangle from "../assets/Rectangle 41.svg";
// import businessman from "../assets/businessman.svg";
import nextIconArrow from "../assets/nextIconArrow.svg";
import "react-phone-number-input/style.css";
import "react-phone-number-input/style.css";
// import YourMobileContents from "./YourMobileContents";

const MainContainer = ({ midComponent, downimg }) => {
  return (
    <div className="MainContainer">
      <div className="MainContainer-part1">
        <div className="MainContainer-part1-NextButton">
          <div className="nextIcon">
            <img className="nextIconArrow" alt="alt" src={nextIconArrow} />
          </div>
        </div>
      </div>
      {/* ================================================================= */}

      <div className="MainContainer-part2">{midComponent}</div>

      {/* ================================================================= */}
      <div className="MainContainer-part3">
        <img className="businessman" alt="alt" src={downimg} />
        <img className="rectangle" alt="alt" src={rectangle} />
      </div>
    </div>
  );
};

export default MainContainer;
