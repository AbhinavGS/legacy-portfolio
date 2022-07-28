import React, { useState } from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";

import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="footer-container" id="CONTACT">
        <h2 className="footer-main-title">Take a coffee & chat with me</h2>

        <div className="footer-cards">
          <div className="footer-card ">
            {/* <img src={images.email} alt="email" /> */}
            <a href="mailto:abhinavsorate01@gmail.com" className="p-text">
              <FiMail size={25} /> &nbsp; abhinavsorate01@gmail.com
            </a>
          </div>
          <div className="footer-card">
            {/* <img src={images.mobile} alt="phone" /> */}
            <a href="tel:+91 9552773945" className="p-text">
              <BsPhone size={25} /> &nbsp;+91 955 277 3945
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="footer-form flex">
            <div className="flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
      <div className="fixed-footer">
        <div>Made with ❤️ by Abhinav Sorate</div>
        <div className="footer-icon-container">
          <a
            className="footer-black-icons"
            href="https://www.linkedin.com/in/abhinav-sorate-42a959140/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            className="footer-black-icons"
            href="https://github.com/AbhinavGS"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
