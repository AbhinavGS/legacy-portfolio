import React from "react";
import { Button } from "@mui/material";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div>
        <div className="container" id="HOME">
          <div className="header-text-div">
            <h3 className="header-text-h3">
              HELLO.........................................
            </h3>
            <h1 className="header-text-h1">
              I AM <span className="my-name"> &nbsp; Abhinav Sorate</span>
            </h1>
            <h5 className="header-text-h5">FULL STACK DEVELOPER</h5>
            <div className="header-button-div">
              <a href="#app__footer">
                <Button className="header-button" variant="contained">
                  HIRE ME
                </Button>
              </a>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.dropbox.com/s/5euzi6refseb754/RESUME_Abhinav-Sorate.pdf?dl=0"
                  )
                }
                className="header-button cv-btn"
                variant="outlined"
              >
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
