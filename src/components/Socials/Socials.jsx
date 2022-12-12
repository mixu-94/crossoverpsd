import React from "react";
import "./Socials.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaPinterest,
  FaInstagram,
  FaStumbleupon,
  FaRss,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <div className="socials-info">
        <h1>Social Media</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet.
        </p>
      </div>
      <div className="socials-icons">
        <span>
          <a href="#" target="_blank">
            <FaFacebookF size={40} className="socials-icon facebook" />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaTwitter size={40} className="socials-icon twitter" />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaGoogle size={40} className="socials-icon google" />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaPinterest size={40} className="socials-icon pinterest" />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaInstagram size={40} className="socials-icon instagram" />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaStumbleupon size={40} className="socials-icon stumble" />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaRss size={40} className="socials-icon rss" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Socials;
