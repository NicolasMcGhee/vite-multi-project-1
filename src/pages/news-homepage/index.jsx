import React from "react";
import Hero from "../../Components/news-hompage-components/Hero";
import Navbar from "../../Components/news-hompage-components/Navbar";
import './index.css'


export default function NewsHomePage() {
  return (
    <div className="NewsHomePage_Container">
      <Navbar />
      <Hero />
    </div>
  );
}
