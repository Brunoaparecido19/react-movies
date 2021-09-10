import React from "react";
import "../Header/style/Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header-logo">
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/210910/519f53e5363bd24a1ab0358509a35016.png"
            alt="netflix-font"
            border="0"
          ></img>
        </a>
      </div>
      <div className="header-user">
        {" "}
        <a href="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};
