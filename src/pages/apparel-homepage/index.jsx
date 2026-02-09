import React from "react";
import "./index.css";
import Hero from "/apparel-images/hero-desktop.jpg";

export default function ApparelHomepage() {
  return (
    <div className="Apparel_Container">
      <div className="Apparel_Main">
        {/* Left */}
        <div className="Apparel_MainLeft">
          {/* Title - Left */}
          <div className="Apparel_MainTitle">
            <h1 className="Apparel_Highlight Apparel_LightWeight">WE'RE</h1>
            <h1>COMING</h1>
            <h1>SOON</h1>
          </div>
          {/* Desc - Left */}
          <p className="Apparel_Highlight Apparel_Desc">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        {/* Right */}
        <div className="Apparel_MainRight">
          {/* <h1>test</h1> */}
          {/* Img - Right */}
          {/* <img src={Hero} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
