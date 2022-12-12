import React from "react";
import "./Tabs.css";
// import tap from "../Tabs/tap.png";
import tap from "./tap.png";

const Tabs = () => {
  return (
    <div>
      <section className="features" id="features">
        <div className="features-tabs">
          <div className="features__buttons-group">
            <button className="features-btn active" value="0">
              tab 1
            </button>
            <button className="features-btn" value="1">
              tab 2
            </button>
            <button className="features-btn" value="2">
              tab 3
            </button>
          </div>
          <div className="features-content">
            <div className="features-tab active" id="0">
              <h3>Tabs with soft transitioning effect. 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
              <button>Download</button>
            </div>
            <div className="features-tab" id="1">
              <h3>Tabs with soft transitioning effect. 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
              <button>Download</button>
            </div>
            <div className="features-tab" id="2">
              <h3>Tabs with soft transitioning effect. 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor. Cum sociis natoque penatibus et magnis dis parturient
                montes.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
              <button>Download</button>
            </div>
          </div>
        </div>
        <div>
          <img src={tap} alt="tap" />
        </div>
      </section>
    </div>
  );
};

export default Tabs;
