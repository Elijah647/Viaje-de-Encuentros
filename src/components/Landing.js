import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Landing.css";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Landing() {
  return (
    <>
      <div id="home" className="landing-content">
        <h2>Welcome to</h2>
        <h1 className="h1-landing"><strong>" Viaje de Encuentros "</strong>
        <p>Journey of Encounters</p>
        </h1>
        <Button class="btn" onClick={() => handleScrollToSection("countries")}>
          Vamos
        </Button>
      </div>
    </>
  );
}

export default Landing;
