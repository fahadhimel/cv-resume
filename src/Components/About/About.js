import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="Ccontainer" id="about">
      <div className="about">
        <div
          className="about-right"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="about-right-head">
            <span>ABOUT</span>
          </div>
          <h4>I’m Fahad Himel, Full-Stack Developer</h4>
          <p>
            I'm not just a full-stack developer; I'm a creator at heart, turning
            ideas into reality is both my profession and my lifestyle. With a
            deep passion for innovation, I've dedicated myself to crafting
            captivating web applications that leave a lasting impression.
            Creating ideas and giving them life isn't just what I do—it's who I
            am. From brainstorming the next big thing to meticulously crafting
            every line of code, I thrive on the journey of bringing concepts to
            fruition. It's not just about building applications; it's about
            shaping experiences and making a meaningful impact.
          </p>
          <a
            href="https://drive.google.com/file/d/1dl8tuthP25dXewN2ZDr0qwuhsTAIbNkI/view?usp=sharing"
            download
            className="about-btn"
          >
            Download CV
          </a>
        </div>
        <div className="about-left">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="about-left-box"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
