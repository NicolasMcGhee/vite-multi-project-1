import React from "react";
import "./Hero.css";
import HeroBackground from "/agency-images/desktop/image-header.jpg";

export default function Hero() {
  return (
    <div className="agencyHeroContainer">
      <img src={HeroBackground} alt=""/>
      <div className="agencyNavbar">
        <div className="agencyNavFlex">
          <div>IAMGE</div>
          <div className="agencyNavItems">
            <li>home</li>
            <li>store</li>
            <li>blog</li>
            <li>help</li>
          </div>
        </div>

        <div className="agencyTitle">
          <h1>WE ARE CREATIVE</h1>
        </div>
      </div>
    </div>
  );
}
