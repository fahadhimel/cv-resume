import React from "react";
import Content from "./Content/Content";

import "./Services.css";

const Services = () => {
  return (
    <div className="services-all" id="services">
      <div className="services">
        <div className="services-head">
          <span>Services</span>
        </div>

        <div className="services-body">
          <div className="services-body-top" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <div className="services-item">
              <i className="fa-solid fa-desktop"></i>
              <h5>Web Design</h5>
              <p>
                <Content
                  className="content"
                  ddata={`I plan, create and code internet sites and web pages, which
                  combine text with lots of words, images, graphics and video
                  clips. I design and layout a website or web page.`}
                />
              </p>
            </div>
            <div className="services-item">
              <i className="fa-brands fa-react"></i>
              <h5>Web Development</h5>
              <p>
                <Content
                  ddata={`I create and maintain websites. I am responsible for the
                technical aspects of the site, such as its functionality and
                capacity, which is a measure of a website's speed and how much
                traffic the site can handle. I create content for the site.`}
                />
              </p>
            </div>
            <div className="services-item">
              <i className="fa-solid fa-mobile"></i>
              <h5>App Development</h5>
              <p>
                <Content
                  ddata={`I am highly proficient in developing Android applications and
                iOS applications. I give them good designs and solve their
                problems easily.`}
                />
              </p>
            </div>
          </div>
          <div className="services-body-button" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <div className="services-item">
              <i className="fa-solid fa-arrows-left-right-to-line"></i>
              <h5>API</h5>
              <p>
                <Content
                  ddata={`I help enable the development of HTTP services to reach client
                entities such as browsers, devices or tablets through APIs.
                Through which a user can access its services from different
                operating systems.`}
                />
              </p>
            </div>
            <div className="services-item">
              <i className="fa-solid fa-database"></i>
              <h5>Database</h5>
              <p>
                <Content
                  ddata={`I do database design or database programming, responsible for
                designing, programming, building and implementing new databases
                as well as modifying existing databases for platform updates and
                changes to user needs.`}
                />
              </p>
            </div>
            <div className="services-item">
              <i className="fa-solid fa-users"></i>
              <h5>Teamwork</h5>
              <p>
                <Content
                  ddata={`Creating ideas and giving them life is one of my strengths and hobbies.I always think about working with a team. Because there are different people who have different thoughts. Due to which we get the solution of any problem very easily and quickly.`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
