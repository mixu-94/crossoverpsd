import React from "react";
import "./Sub.css";
import sup from "./sup.png";
import { BsFillCloudyFill } from "react-icons/bs";

const Sub = () => {
  return (
    <div>
      <article className="sub-list">
        <img src={sup} />
        <div className="sub-list__content">
          <h3>Sub list section</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo.
          </p>
          <div className="sub-list__content-block">
            <span className="fa-stack fa-lg" aria-hidden="true">
              <span
                className="fa fa-circle-thin fa-stack-2x"
                aria-hidden="true"
              ></span>
              <span
                className="fa fa-cloud-upload fa-stack-1x"
                aria-hidden="true"
              ></span>
            </span>
            <div className="sub-list__content-block_text">
              <h4>
                Title{" "}
                <span>
                  <BsFillCloudyFill />
                </span>
              </h4>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
            </div>
          </div>
          <div className="sub-list__content-block">
            <span className="fa-stack fa-lg" aria-hidden="true">
              <span
                className="fa fa-circle-thin fa-stack-2x"
                aria-hidden="true"
              ></span>
              <span
                className="fa fa-cloud-download fa-stack-1x"
                aria-hidden="true"
              ></span>
            </span>
            <div className="sub-list__content-block_text">
              <h4>
                Title
                <span>
                  <BsFillCloudyFill />
                </span>
              </h4>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Sub;
