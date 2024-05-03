import React from "react";

import "./EducationExperience.css";

const EducationExperience = () => {
  return (
    <div className="educationexperience" id="educationexperience">
      <div className="educationexperience-head">
        <span>Education</span>
      </div>
      <div className="educationexperience-body">
        <div
          className="educationexperience-left"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="Conatiner">
            <div className="main">
              <ul className="timeline">
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2023</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2> Bachelor of Science (B.Sc) (Continue)</h2>
                    <div className="label-div">
                      <div className="label-div-left">
                        <p>From</p>
                        <p>Related Subject</p>
                      </div>
                      <div className="label-div-right">
                        <p>: Northern University Bangladesh.</p>
                        <p>: Computer Science Engineering (CSE)</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2022</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2>Diploma in Computer Science</h2>
                    <div className="label-div">
                      <div className="label-div-left">
                        <p>From</p>
                        <p>Examination</p>
                        <p>Result</p>
                        <p>Related Subject</p>
                      </div>
                      <div className="label-div-right">
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
                        <p>From</p>
                        <p>Examination</p>
                        <p>Result</p>
                        <p>Related Subject</p>
                      </div>
                      <div className="label-div-right">
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
        <div
          className="educationexperience-right"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="Conatiner">
            <div className="main">
              <ul className="timeline">
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2023</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2>Work Experience</h2>
                    <div className="experience_content">
                      <h6>Full-Stack Developer</h6>
                      <p>
                        <h6>GSCS International LTD.</h6>Uttara, Dhaka.
                        August-2023 – Present
                      </p>
                      <div className="container experience_p">
                        <p>
                          1. Developed and maintained responsive web
                          application.
                        </p>
                        <p>
                          2. Implemented frontend components and user interfaces
                          using React-Vite with Material-UI ensuring a modern
                          and visually appealing design.
                        </p>
                        <p>
                          3. Designed and implemented RESTful APIs and
                          microservices using Nest JS.
                        </p>
                        <p>
                          4. Utilized TypeORM for ORM operations, managing MySQL
                          databases efficiently.
                        </p>
                        <p>
                          5. Collaborated with cross-functional teams to gather
                          requirements, plan features, and deliver solutions
                          that meet business needs.
                        </p>
                        <p>
                          6. Employed Git for version control and collaborated
                          with team members using GitHub and Bitbucket.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <time className="tmtime" dateTime="2022-09-20 18:30">
                    <span>2022</span>
                  </time>
                  <div className="icon icon-phone"></div>
                  <div className="label">
                    <h2>Internship</h2>
                    <div className="experience_content">
                      <h6>Web Development</h6>
                      <h6>
                        Snowtex Outerwear LTD. <span>Dhamrai, Dhaka.</span>{" "}
                      </h6>
                      <div className="container experience_p">
                        <p>
                          1. Assisted in the development of web applications
                          using HTML, CSS, SCSS, and JavaScript TypeScript.
                        </p>
                        <p>
                          2. Contributed to the frontend development of projects
                          using React.js, ensuring responsive and interactive
                          user interfaces.
                        </p>
                        <p>
                          3. Participated in backend development tasks using
                          .NET Core and MSSQL for database operations.
                        </p>
                        <p>
                          4. Collaborated with senior developers to learn best
                          practices and enhance coding skills.
                        </p>
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
