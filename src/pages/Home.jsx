import React from "react";
import Hero from "../assets/components/Hero/Hero";
import About from "../assets/components/About/About";
import Education from "../assets/components/Education/Education";
import Projects from "../assets/components/Projects/Projects";
import Contact from "../assets/components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
