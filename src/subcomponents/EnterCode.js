import React from "react";
import "../subcomponentcss/EnterCode.css";

const EnterCode = () => {
  return (
    <div className="EnterCode-Container">
      <h1>Enter the code</h1>
      <div className="code-input">
        <input type="text" maxLength={1} />
        <input type="text" maxLength={1} />
        <input type="text" maxLength={1} />
        <input type="text" maxLength={1} />
      </div>
      <a href="/" className="resendCode">
        Resend Code
      </a>
    </div>
  );
};

export default EnterCode;
