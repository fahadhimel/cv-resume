import React, { useEffect } from "react";
import Animation from "../Animation/Animation";
import "./Nabvar2.css";

const Nabvar2 = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 150);

      let scroll = document.querySelector(".scrolltop");
      scroll.classList.toggle("active", window.scrollY > 500);
    });

    const menu = document.querySelector(".menu");
    const menubtnn = document.querySelector(".menu-btnn");
    const closebtnn = document.querySelector(".close-btnn");

    menubtnn.addEventListener("click", () => {
      menu.classList.add("activeMenu");
    });
    closebtnn.addEventListener("click", () => {
      menu.classList.remove("activeMenu");
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <header>
      <span className="brand">Portfolio</span>

      <div className="menu">
        <div className="btnn">
          <i className="fas fa-times close-btnn"></i>
        </div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#educationexperience">Education</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="btnn">
        <i className="fas fa-bars menu-btnn"></i>
      </div>
      <div className="scrolltop" onClick={() => scrollToTop()}>
        <Animation />
      </div>
    </header>
  );
};

export default Nabvar2;
