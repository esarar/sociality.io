import React from "react";

function Header({ isShow }) {
  return (
    <div className="header-container">
      {isShow && (
        <div className="header-item">
          <p>
            <span className="dot1"></span>Published
          </p>
          <p>
            <span className="dot2"></span>Scheduled
          </p>
          <p>
            <span className="dot3"></span>Need Approval
          </p>
          <p>
            <span className="dot4"></span>Error
          </p>
          <p>
            <span className="dot5"></span>Notes
          </p>
        </div>
      )}
      <div className={isShow ? "header-image" : "header-image show"}>
        <img
          className="user-image"
          src={require("../assets/images/e9f521d95aa8a6feba896e3fa332055407e71218.png")}
        />
      </div>
    </div>
  );
}

export default Header;
