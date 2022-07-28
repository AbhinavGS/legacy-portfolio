import React, { useState } from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";

import emailjs from "@emailjs/browser";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { username, email, message } = formData;

  const { enqueueSnackbar } = useSnackbar();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.message === "" ||
      !ValidateEmail(formData.email)
    ) {
      enqueueSnackbar("Please fill all the fields appropriately", {
        variant: "warning",
      });
      return;
    }

    setLoading(true);

    let templateParams = {
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    setTimeout(() => setLoading(false), 5000);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setLoading(false);
          enqueueSnackbar("Thank You For Getting In Touch!", {
            variant: "success",
          });
          console.log(response);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setLoading(false);
          enqueueSnackbar("Error! Please use Email or Phone to get in touch.", {
            variant: "error",
          });
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <div className="footer-container" id="contact">
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
          {loading ? (
            <CircularProgress className="circular-progress" />
          ) : (
            <button type="button" className="p-text" onClick={handleSubmit}>
              Send Message
            </button>
          )}
        </div>
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
