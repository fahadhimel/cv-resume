import React, {  useEffect } from "react";

import "./Clients.css";

const Clients = () => {
  useEffect(() => {
    const workSection = document.querySelector(".clients");
    const workObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        const counterNum = document.querySelectorAll(".counter-numbers");
        const speed = 100;

        counterNum.forEach((curElem) => {
          const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            const initialNum = parseInt(curElem.innerText);
            // console.log(initialNum);
            const incrementNumber = Math.trunc(targetNumber / speed);
            if (initialNum < targetNumber) {
              curElem.innerText = `${initialNum + incrementNumber}+`;
              setTimeout(updateNumber, 50);
            }
          };

          updateNumber();
        });
        observer.unobserve(workSection);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    workObserver.observe(workSection);
  }, []);

  return (
    <div className="ontainer">
      <div className="clients">
        <div className="clients-item" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <i className="fa fa-smile"></i>
          <br />
          <span className="counter-numbers" data-number="2000">
            0
          </span>

          <p>Happy Clients</p>
        </div>
        <div className="clients-item" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <i className="fa fa-thumbs-up"></i>
          <br />
          <span className="counter-numbers" data-number="500">
            0
          </span>
          {/* <span>500</span> */}
          {/* <span><Number n={500}/></span> */}
          <p>COMPLETED PROJECTS</p>
        </div>
        <div className="clients-item" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <i className="fa fa-clock"></i>
          <br />
          <span className="counter-numbers" data-number="5000">
            0
          </span>
          {/* <span>1500</span> */}
          <p>HOURS OF WORK</p>
        </div>
        <div className="clients-item" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <i className="fa fa-star"></i>
          <br />
          <span className="counter-numbers" data-number="1200">
            0
          </span>
          <p>POSITIVE FEEDBACKS</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
