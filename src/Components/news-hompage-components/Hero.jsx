import React from "react";
import "./Hero.css";
import Banner from "/news-images/image-web-3-desktop.jpg";
export default function Hero() {
  return (
    <div className="Hero_Container">
      <div className="Heo_Left">
        <img src={Banner} alt="" />
        <div className="Hero_Grid">
          <div className="Hero_Title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="Hero_Button">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              odit ad quos maiores perspiciatis, repellat impedit numquam autem
              tempore aliquam id, quam at harum assumda!
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className="Hero_Right">
        <h1>New</h1>
        <div>
          <h2>Hydrogen VS Electric Cars</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            alias dolorum sint cum, rerum illo eum eos distinctio eaque porro!
          </p>
        </div>
        <div  className="Hero_Right_Center">
          <h2>Hydrogen VS Electric Cars</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            alias dolorum sint cum, rerum illo eum eos distinctio eaque porro!
          </p>
        </div>
        <div>
          <h2>Hydrogen VS Electric Cars</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            alias dolorum sint cum, rerum illo eum eos distinctio eaque porro!
          </p>
        </div>
      </div>
    </div>
  );
}
