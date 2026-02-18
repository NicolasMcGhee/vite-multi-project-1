import React from "react";
import { Link } from "react-router";
import "./index.css";

export default function Home() {
  return (
    <div className="Home_Container">
      <div className="Home_Links">
        <Link to={"/news-homepage"}>
          <h1>News Home Page</h1>
        </Link>
        <Link to={"/apparel-homepage"}>
          <h1>Apparel Coming Soon Page</h1>
        </Link>
        <Link to={"/agency-homepage"}>
          <h1>Agency Home Page</h1>
        </Link>
      </div>
    </div>
  );
}
