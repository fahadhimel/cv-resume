import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import $ from "jquery";

import "./Blog_Posts.css";

import bimg1 from "./../../Images/gallery/react1.gif";
import bimg2 from "./../../Images/gallery/web2.jpg";
import bimg3 from "./../../Images/gallery/native1.png";
import bimg4 from "./../../Images/gallery/code1.jpg";
import bimg5 from "./../../Images/gallery/code2.jpg";
import bimg6 from "./../../Images/gallery/core2.png";

const blog_Posts = () => {
  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blog" id="blog">
      <div className="blog-head">
        <span>RECENT BLOG</span>
      </div>
      <div className="blog-post" data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
        <Slider {...settings}>
          <div className="blog-item">
            <div className="blog-item-top">
              <a href={bimg1} data-lightbox="models" data-title="Blog 16">
                <p>April 25,2022</p>
                <img src={bimg1} alt="images" className="blog-item-img" />
                <div className="blog-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </a>
            </div>
            <div className="blog-item-bottom">
              <h4>Personal & career growth</h4>
              <p>
                <Content
                  data={`Reflect on things in the past that has helped you grow in competencies that may not be directly technical related. These can be soft skills you’ve focused on developing or any career-related tips for surviving in the tech world. `}
                />
              </p>
            </div>
          </div>
          {/*  */}
          <div className="blog-item">
            <div className="blog-item-top">
              <a href={bimg2} data-lightbox="models" data-title="Blog 17">
                <p>April 25,2022</p>
                <img src={bimg2} alt="images" className="blog-item-img" />
                <div className="blog-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </a>
            </div>
            <div className="blog-item-bottom">
              <h4>Sharing knowledge</h4>
              <p>
                <Content
                  data={`
                  I’m a huge believer in sharing knowledge with others. If the people I’ve worked with kept their knowledge to themselves how could I have gained knowledge myself? If people online didn’t share their knowledge for free, how could I have fixed all those bugs and compilation errors? Imagine a world where free sharing of knowledge wasn’t available.`}
                />
              </p>
            </div>
          </div>
          {/*  */}
          <div className="blog-item">
            <div className="blog-item-top">
              <a href={bimg3} data-lightbox="models" data-title="Blog 18">
                <p>April 25,2022</p>
                <img src={bimg3} alt="images" className="blog-item-img" />
                <div className="blog-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </a>
            </div>
            <div className="blog-item-bottom">
              <h4>Learn to accept help</h4>
              <p>
                <Content
                  data={`
                  We don’t seem to have any problems asking Google for help. So why should there be a problem asking a fellow team member that’s likely to give insight into a problem you’ve come across
                  “There’s no such thing as a stupid question” is the mindset I like to have. 
                  
                  Asking questions to your teammates will not only help you when you’re stuck, it will help your teammates realise they can also ask you questions. This way everyone is happy as we can get over any blockers to our tasks quicker.`}
                />
              </p>
            </div>
          </div>
          {/*  */}
          <div className="blog-item">
            <div className="blog-item-top">
              <a href={bimg4} data-lightbox="models" data-title="Blog 19">
                <p>April 25,2022</p>
                <img src={bimg4} alt="images" className="blog-item-img" />
                <div className="blog-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </a>
            </div>
            <div className="blog-item-bottom">
              <h4>language support</h4>
              <p>
                <Content
                  data={`
                  Community support can also be crucial. If you think you’ll become discouraged if it takes you hours to find a solution to a problem you’re faced with, then pick a language that has tons of community support and good documentation.`}
                />
              </p>
            </div>
          </div>
          {/*  */}
          <div className="blog-item">
            <div className="blog-item-top">
              <a href={bimg5} data-lightbox="models" data-title="Blog 20">
                <p>April 25,2022</p>
                <img src={bimg5} alt="images" className="blog-item-img" />
                <div className="blog-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </a>
            </div>
            <div className="blog-item-bottom">
              <h4>Your personal challenges</h4>
              <p>
                <Content
                  data={`
                  We all go through common and individual struggles in our own journeys. Reflect and share what those struggles were and provide tips on how you overcame them.
                  Topics on challenges faced by programmers can include: feeling a lack of progress, feeling like quitting, the struggles of job hunting, imposter syndrome and all other various struggles we face.`}
                />
              </p>
            </div>
          </div>
          {/*  */}
          <div className="blog-item">
            <div className="blog-item-top">
              <a href={bimg6} data-lightbox="models" data-title="Blog 21">
                <p>April 25,2022</p>
                <img src={bimg6} alt="images" className="blog-item-img" />
                <div className="blog-overlay">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </a>
            </div>
            <div className="blog-item-bottom">
              <h4>Definition of Technical</h4>
              <p>
                <Content
                  data={`
                  Technical debt is a term used in the context of software development and has seen increasing interest as a subject area of study in recent years. Software development practitioners and researchers are now acknowledging technical debt as a challenge in the management of software projects and one that should be taken seriously`}
                />
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const Content = ({ data }) => {
  const text = data;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <span className="t-text">
      {isReadMore ? text.slice(0, 120) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </span>
  );
};

export default blog_Posts;
