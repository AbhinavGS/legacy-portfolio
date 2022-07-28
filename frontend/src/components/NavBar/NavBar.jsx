import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./NavBar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="ags-logo.png" alt="logo" />
      </div>
      <ul className="navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <GiHamburgerMenu onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
