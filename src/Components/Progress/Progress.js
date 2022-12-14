import React, { useEffect } from "react";
import "./Progress.css";

const Progress = () => {
  useEffect(() => {
    const progresscontainer1 = document.querySelector(".progress1");
    const workObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        function ass() {
          let bar = document.querySelectorAll(".bar1");
          bar.forEach((progre) => {
            let value = Number(progre.getAttribute("data-value"));
            progre.style.width = `${value}%`;
            let count = 0;
            let progressAnimation = setInterval(() => {
              count++;
              progre.setAttribute("data-text", `${count}%`);
              if (count === value) {
                clearInterval(progressAnimation);
              }
            }, 20);
          });
        }
        // window.onload =
        ass();

        observer.unobserve(progresscontainer1);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    workObserver.observe(progresscontainer1);
  }, []);
  return (
    <div className="progress_all" id="skills">
      <div className="progress_all-head">
        <span>Skills </span>
      </div>

      <div className="progress_container1">
        <div className="progress1" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="progress_item1">
            <h5 className="progress_title1">Html5</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="80" data-text="80"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">Css3</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="75" data-text="75"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">Bootstrap</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="65" data-text="65"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">Scss</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="65" data-text="65"></div>
            </div>
          </div>
        </div>
        <div className="progress1" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="progress_item1">
            <h5 className="progress_title1">JavaScript</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="80" data-text="80"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">React js</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="80" data-text="80"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">jQuery</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="60" data-text="60"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">React Native</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="60" data-text="60"></div>
            </div>
          </div>
        </div>
        <div className="progress1 responsive" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="progress_item1">
            <h5 className="progress_title1">MSSQL</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="70" data-text="70"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">ASP.Net Core</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="70" data-text="70"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">API</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="70" data-text="70"></div>
            </div>
          </div>
          <div className="progress_item1">
            <h5 className="progress_title1">Java</h5>
            <div className="progress_bar1">
              <div className="bar1" data-value="40" data-text="40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
