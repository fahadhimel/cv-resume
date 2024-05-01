import React, { useEffect } from "react";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Clients from "../Happy_Clients/Clients";
import Services from "../Services/Services";
import "./Home.css";

import ReactTypingEffect from "react-typing-effect";
import EducationExperience from "../EducationExperience/EducationExperience";
import Contact from "../Contact/Contact";
import Nabvar2 from "../Navbar/Nabvar2";
import BlogPosts from "../Blog_Posts/Blog_Posts";
import Progress from "../Progress/Progress";
import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="all">
      <div className="all-home" id="home">
        {/* <Navbar /> */}
        <ColorSwitcher />

        <div className="home">
          <div className="home-left">
            <h1>
              Hi! I’m <span className="fahad-himel">Fahad Himel</span>
            </h1>
            <h2>
              I am &nbsp;
              <ReactTypingEffect
                speed={20}
                eraseSpeed={20}
                eraseDelay={2000}
                typingDelay={200}
                cursor=""
                text={[
                  "Full-Stack Developer",
                  "Good Learner",
                  "Professional Developer",
                  "Web Designer",
                ]}
              />
            </h2>

            <div className="home-div-btn">
              <a href="#about" className="home-left-btn">
                READ MORE
              </a>
              <a href="#contact" className="home-right-btn">
                CONTACT ME
              </a>
            </div>
          </div>
          <div className="home-right"></div>
        </div>
      </div>
      <Nabvar2 />
      <About />
      <Progress />
      <EducationExperience />
      <Services />
      <Clients />
      <Gallery />
      <BlogPosts />
      <Contact />
    </div>
  );
};

export default Home;
