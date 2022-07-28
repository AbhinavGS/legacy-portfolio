import React from "react";

import { Button } from "@mui/material";

import "./About.scss";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-image-div">
        <img className="about-image" src="about-image.png" alt="" />
      </div>
      <div className="about-info-div">
        <h2>
          LET'S <br />
          INTRODUCE ABOUT <br />
          MYSELF
        </h2>
        <p>
          Hi, I'm a self taught full stack web developer and graduate of
          Bachelor of Technology in Mechanical engineering. I create modern
          websites, webapps that are fast, responsive & easy to use. I always
          follow the latest trends and best practices.
        </p>
        <p>
          I don't like to define myself by the work I've done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </p>
        <Button
          onClick={() =>
            window.open(
              "https://www.dropbox.com/s/5euzi6refseb754/RESUME_Abhinav-Sorate.pdf?dl=0"
            )
          }
          className="about-info-button"
          variant="contained"
        >
          DONWLOAD CV
        </Button>
      </div>
    </div>
  );
};

export default About;
