import React from "react";
import "./Transform.css";
import placeholder from "/agency-images/desktop/image-transform.jpg";

export default function Transform({flip}) {
  return (
    <div className={`Transform_Container ${flip == "true" ? "flip" : ""}`}>
      {/* Left Side */}
      <div className="Transform_LeftSide">
        <div className="Transform_LeftSideText">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="Transform_Button">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="Transform_RightSide">
        <img src={placeholder} alt="" width={1000} />
      </div>
    </div>
  );
}
