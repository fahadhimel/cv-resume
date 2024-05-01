import React, { useEffect } from "react";
import "./ColorSwitcher.css";

const ColorSwitcher = () => {
  useEffect(() => {
    document.querySelector(".switcher-btn").onclick = () => {
      document.querySelector(".color-switcher").classList.toggle("colorview");
    };

    let themeButtons = document.querySelectorAll(".theme-buttons");
    themeButtons.forEach((color) => {
      color.addEventListener("click", () => {
        let dataColor = color.getAttribute("data-color");
        document
          .querySelector(":root")
          .style.setProperty("--rootColor", dataColor);
      });
    });
  }, []);
  return (
    <div className="color-switcher">
      <div className="switcher-btn">
        <i className="fa fa-cog"></i>
      </div>
      <h3>Select Color</h3>
      <div className="theme-buttons-container">
        <span
          className="theme-buttons"
          data-color="#458ed8"
          style={{ background: "#458ed8" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#e5e906"
          style={{ background: "#e5e906" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#fd271f"
          style={{ background: "#fd271f" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#17d4d4"
          style={{ background: "#17d4d4" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#ea1ffd"
          style={{ background: "#ea1ffd" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#21eb64"
          style={{ background: "#21eb64" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#eb9321"
          style={{ background: "#eb9321" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#0c0a0cf3"
          style={{ background: "#0c0a0cf3" }}
        ></span>

        <span
          className="theme-buttons"
          data-color="#f3098a"
          style={{ background: "#f3098a" }}
        ></span>
      </div>
    </div>
  );
};

export default ColorSwitcher;
