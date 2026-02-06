import React, { act, useState } from "react";
import "./Navbar.css";
import Logo from "/news-images/logo.svg";
import Menu_Close from "/menu_close.svg";
import Menu_Open from "/menu_open.svg";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="Navbar_Container">
      <img src={Logo} alt="" />
      <div>
        <img className="Navbar_MenuIcon" width={40} src={Menu_Open} onClick={() => setActive(!active)} />
        <ul className={`Navbar_List ${active ? "nav_Show" : ""}`}>
          <img className="Navbar_MenuIcon" width={40} src={Menu_Close} onClick={() => setActive(!active)} />

          <li>Home</li>
          <li>News</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </nav>
  );
}
