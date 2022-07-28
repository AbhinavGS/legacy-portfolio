import React from "react";

import { Button } from "@mui/material";

import "./About.scss";

const About = () => {
  return (
    <div className="about-container" id="ABOUT">
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
          Whose given. Were gathered. There first subdue greater. Bearing you
          Whales heaven midst their. Beast creepeth. Fish days.
        </p>
        <p>
          Is give may shall likeness made yielding spirit a itself together
          created after sea is in beast beginning signs open god you're
          gathering whose gathered cattle let. Creature whales fruit unto meat
          the life beginning all in under give two.
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
