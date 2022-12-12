import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1> PRICING OPTIONS</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

      <div className="pricing-boxes">
        <div className="pricing-box">
          <div className="pricing-box-heading">Basic</div>
          <div className="pricing-box-price">
            <h2>70$</h2>
            <p> Monthly Payment </p>
          </div>
          <div className="pricing-box-info"></div>
        </div>
        <div className="pricing-box">
          <div className="pricing-box-heading">Professional</div>
          <div className="pricing-box-price">
            <h2>70$</h2>
            <p> Monthly Payment </p>
          </div>
          <div className="pricing-box-info"></div>
        </div>
        <div className="pricing-box">
          <div className="pricing-box-heading">Enterprise</div>
          <div className="pricing-box-price">
            <h2>70$</h2>
            <p> Monthly Payment </p>
          </div>
          <div className="pricing-box-info">
            <ul>
              <li>
                <p> 1 GB OF SPACE </p>
              </li>
              <li>
                <p> 1 GB OF SPACE </p>
              </li>
              <li>
                <p> 1 GB OF SPACE </p>
              </li>
              <li>
                <p> 1 GB OF SPACE </p>
              </li>
              <li>
                <p> 1 GB OF SPACE </p>
              </li>
              <li>
                <p> 1 GB OF SPACE </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
