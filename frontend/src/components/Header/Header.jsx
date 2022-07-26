import React from "react";
import { Button } from "@mui/material";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="header-text-div">
            <h3 className="header-text-h3">
              HELLO.........................................
            </h3>
            <h1 className="header-text-h1">I AM ABHINAV SORATE</h1>
            <h5 className="header-text-h5">FULL STACK DEVELOPER</h5>
            <div className="header-button-div">
              <Button className="header-button" variant="contained">
                HIRE ME
              </Button>
              <Button className="header-button cv-btn" variant="outlined">
                GET CV
              </Button>
            </div>
          </div>
          <div className="header-image-div">
            <img
              className="header-image"
              src="header-image-main.png"
              alt="guy with a computer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
