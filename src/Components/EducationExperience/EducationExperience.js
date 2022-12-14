import React from "react";

import "./EducationExperience.css";

import internship_img from "../../Images/gallery/snowtexc.jpg";

const EducationExperience = () => {
  return (
    <div className="educationexperience" id="educationexperience">
      <div className="educationexperience-head">
        <span>Education</span>
      </div>
      <div className="educationexperience-body">
        <div className="educationexperience-left" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="Conatiner">
            <div className="main">
              <ul className="timeline">
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2022</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2>Diploma in Polytechnic engineering</h2>
                    <div className="label-div">
                      <div className="label-div-left">
                        <p>Board of</p>
                        <p>From</p>
                        <p>Examination</p>
                        <p>Result</p>
                        <p>Related Subject</p>
                      </div>
                      <div className="label-div-right">
                        <p>: Bangladesh Technical education Board.</p>
                        <p>: Tangail polytechnic institute, Tangail.</p>
                        <p>: 2022 </p>
                        <p>: CGPA 3.39 (CGPA-4) </p>
                        <p>: Computer science</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2017</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2>Secondary School Certificate (S.S.C)</h2>
                    <div className="label-div">
                      <div className="label-div-left">
                        <p>Board of</p>
                        <p>From</p>
                        <p>Examination</p>
                        <p>Result</p>
                        <p>Related Subject</p>
                      </div>
                      <div className="label-div-right">
                        <p>: Dhaka Board.</p>
                        <p>: Ichapur Sher Bangla High School, Kalihati.</p>
                        <p>: 2017 </p>
                        <p>: GPA 4.68 (GPA-5)</p>
                        <p>: Science</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="educationexperience-right" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="Conatiner">
            <div className="main">
              <ul className="timeline">
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2022</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2>Internship</h2>
                    <div className="label-img">
                      <div className="label-img-left"></div>
                      <div className="label-img-right">
                        <div className="store-item label-div-right-img">
                          <a
                            href={internship_img}
                            data-lightbox="models"
                            data-title="Caption5"
                          >
                            <img
                              src={internship_img}
                              alt="images"
                              className="store-img"
                            />
                            <div className="overlay">
                              <i className="fa-solid fa-magnifying-glass-plus"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="label-div">
                      <div className="label-div-left">
                        <p>From</p>
                        <p>Session</p>
                        <p>Related topic</p>
                      </div>
                      <div className="label-div-right">
                        <p>: Snowtex Sportswear Ltd , Bangladesh.</p>
                        <p>: 2022 </p>
                        <p>: React js, ASP.Net Core, API, MSSQL,C#.</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
