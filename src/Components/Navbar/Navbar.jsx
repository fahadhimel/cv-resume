import React, { useEffect } from "react";
import Animation from "../Animation/Animation";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Container = document.querySelector(".Container");
      Container.classList.toggle("sticky", window.scrollY > 100);

      let scroll = document.querySelector(".scrolltop");
      scroll.classList.toggle("active", window.scrollY > 500);
    });

    // document.addEventListener('click','ul li',()=>{
    //   $(this).addClass('active').sibling().removeClass('active')
    // })
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="Container">
      <div className="scrolltop" onClick={() => scrollToTop()}>
        <Animation />
      </div>
      <div className="logo">
        <span>Logo.</span>
      </div>
      <div className="navitem">
        <ul>
          
          <li className="active">
            <a href="#home">Home</a>
          </li>
         
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#educationexperience">Education</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
