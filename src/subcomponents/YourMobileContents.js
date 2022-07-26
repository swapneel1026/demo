import React from "react";
import "../subcomponentcss/YourMobileContents.css";

const YourMobileContents = () => {
  return (
    <>
      <h1 className="mobileHeading">Your mobile number?</h1>

      <div className="mobileInput"></div>
      <div className="checkboxAndPara">
        <input type={"checkbox"} />
        <p>
          By checking you confirm that you accept our Terms and conditions and
          have read our Privacy Policy.
        </p>
      </div>
    </>
  );
};

export default YourMobileContents;
