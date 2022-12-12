import React from "react";
import "./Footer.css";
import bus from "../images/bus.png";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-extend">
        <div className="footer-standard">
          <h3>Standard Picture Section </h3>
          <p>
            The customer is very important, the customer will be followed by the
            <br />
            customer. Aenean euismod bibendum laoreet For pregnant women, it's
            <br />
            a lot of fun, and it's just a good cartoon. The members of the
            pulvinar
            <br />
            team at the time. Together with their companions, the mountains will
            <br />
            give birth to the mighty and the mighty.
          </p>
          <p className="second-p">
            The pain itself is very important, it will be followed by the
            adipiscing elit. <br />
            Aenean euismod bibendum laoreet
          </p>

          <div className="img-1">
            <img src={bus} alt="bus-image" />
          </div>
        </div>
      </div>
      <section>
        <div className="footer-main2">
          <h3>WHY THIS IS AWESOME</h3>
          <span className="span"></span>
          <p>
            The customer is very important, the customer will be followed by the
            customer.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
