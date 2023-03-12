import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function Main() {
  return (
    <React.Fragment>
      <Home />
      <hr />
      {/* <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Testimonials />
      <hr /> */}
      <Contact />
    </React.Fragment>
  );
}

export default Main;
