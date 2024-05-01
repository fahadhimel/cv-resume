import React, { useEffect } from "react";

import "./Gallery.css";

//import img
import img1 from "../../Images/gallery/web1.jpg";
import img2 from "../../Images/gallery/code1.jpg";
import img3 from "../../Images/gallery/native1.png";
import img4 from "../../Images/gallery/react1.gif";
import img5 from "../../Images/gallery/code2.jpg";
import img6 from "../../Images/gallery/native2.jpg";
import img7 from "../../Images/gallery/web5.jpg";
import img8 from "../../Images/gallery/core1.png";
import img9 from "../../Images/gallery/native3.gif";
import img10 from "../../Images/gallery/web3.png";
import img11 from "../../Images/gallery/code3.png";
import img12 from "../../Images/gallery/native4.png";

const Gallery = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");
    const storeImages = document.querySelectorAll(".store-item");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        storeImages.forEach((item) => {
          if (filter === "all") {
            item.style.display = "block";
          } else {
            if (item.classList.contains(filter)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        });
      });
    });
  }, []);

  return (
    <div className="hhh" id="gallery">
      <div className="Gallery-head">
        <span>Gallery</span>
      </div>
      <div className="menua">
        <a href="All" className="btn" data-filter="all">
          All
        </a>
        <a href="Code" className="btn" data-filter="logo">
          Code
        </a>
        <a href="Web" className="btn" data-filter="web">
          Web
        </a>
        <a href="Mobile" className="btn" data-filter="mobile">
          Mobile
        </a>
      </div>

      <div className="box" id="store-items">
        <div className="store-item web">
          <a href={img1} data-lightbox="models" data-title="Caption1">
            <img src={img1} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item logo">
          <a href={img2} data-lightbox="models" data-title="Caption2">
            <img src={img2} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item mobile">
          <a href={img3} data-lightbox="models" data-title="Caption3">
            <img src={img3} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>

        <div className="store-item web">
          <a href={img4} data-lightbox="models" data-title="Caption4">
            <img src={img4} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item logo">
          <a href={img5} data-lightbox="models" data-title="Caption5">
            <img src={img5} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item mobile">
          <a href={img6} data-lightbox="models" data-title="Caption6">
            <img src={img6} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>

        <div className="store-item web">
          <a href={img7} data-lightbox="models" data-title="Caption7">
            <img src={img7} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item logo">
          <a href={img8} data-lightbox="models" data-title="Caption8">
            <img src={img8} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item mobile">
          <a href={img9} data-lightbox="models" data-title="Caption9">
            <img src={img9} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>

        <div className="store-item web">
          <a href={img10} data-lightbox="models" data-title="Caption7">
            <img src={img10} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item logo">
          <a href={img11} data-lightbox="models" data-title="Caption8">
            <img src={img11} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
        <div className="store-item mobile">
          <a href={img12} data-lightbox="models" data-title="Caption9">
            <img src={img12} alt="images" className="store-img" />
            <div className="overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;