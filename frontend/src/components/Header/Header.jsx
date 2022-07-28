import React from "react";
import { Button, Stack, Box } from "@mui/material";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <Stack
        className="header-container"
        id="home"
        direction={{ sm: "column", md: "row" }}
      >
        <Box className="header-text-box">
          <h3 className="header-text-h3">
            HELLO
            <span className="underline">.................................</span>
          </h3>
          <h1 className="header-text-h1">
            I AM <span className="my-name"> &nbsp; Abhinav Sorate</span>
          </h1>
          <h5 className="header-text-h5">FULL STACK DEVELOPER</h5>
          <div className="header-button-div">
            <a href="#contact">
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
        </Box>
        <Box className="header-image-box">
          <img
            className="header-image"
            src="header-image-main.png"
            alt="guy with a computer"
          />
        </Box>
      </Stack>
    </>
  );
};

export default Header;
