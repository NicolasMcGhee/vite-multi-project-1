import React from "react";
import "./index.css";
import Hero from "../../Components/agency-homepage-components/Hero";
import Transform from "../../Components/agency-homepage-components/Transform";

export default function AgencyHomepage() {
  return (
    <div>
      <Hero />
      <Transform />
      <Transform flip="true"/>
      <Transform />
    </div>
  );
}
