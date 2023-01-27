import React from "react";
import "./About.css";


const About = () => {

  return (
    <div className="Ccontainer" id="about">
      <div className="about">
        
        <div className="about-right" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="about-right-head">
            <span>ABOUT</span>
          </div>
          <h4>I’m Fahad Himel, Professional Developer</h4>
          <p>
          Creating ideas and giving them life is one of my strengths and hobbies. So these are not only my profession but also my lifestyle. I have done few works so far including web application and android application. For Web I learned HTML5, Css3, Javascript, React js, jQuery, Bootstrap, and React-Native for Android, and also have ASP.NET,ASP.NET Core, MVC Framework, Web API, MSSQl.
          </p>
          <a href='https://drive.google.com/file/d/1A6aBypJw-9oTVmgBJRwM0PGZvPYArLJ8/view?usp=sharing' download className="about-btn">
            Download CV
          </a>
        </div>
        <div className="about-left">
          <div data-aos="fade-up" 
          data-aos-anchor-placement="top-bottom"
          className="about-left-box">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
