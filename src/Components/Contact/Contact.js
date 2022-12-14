import React, { Fragment } from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <Fragment>
      <div className="contact" id="contact">
        <div className="contact-head">
          <span>Contact </span>
        </div>
        <div className="contact-first">
          <div className="contact-first-item" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <span>
              <h4>
                <i className="fa-solid fa-location-dot"></i>&nbsp; Address
              </h4>
            </span>
            <p>
              <>Tangail, Dhaka,</>
              <br />
              <>Bangladesh</>
            </p>
          </div>
          <div className="contact-first-item" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <span>
              <h4>
                <i className="fa-solid fa-envelope"></i>&nbsp; Email
              </h4>
            </span>
            <p>
              <a href="fahadhimel2@gmail.com">fahadhimel2@gmail.com</a>
              <br />
              <a href="fahathimel@gmail.com">fahathimel@gmail.com</a>
            </p>
          </div>
          <div className="contact-first-item" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <span>
              <h4>
                <i className="fa-solid fa-phone"></i>&nbsp; Phone
              </h4>
            </span>
            <p>
              <>+880 1753152378</>
              <br />
              <>+880 1642268711</>
            </p>
          </div>
        </div>
        {/* contact-second */}
        <div className="contact-second">
          <div
            className="contact-second-item contact-second-item-responsive"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743945.5310619348!2d89.8426282949568!3d24.291298767368787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1667441638703!5m2!1sen!2sbd"
              title="Dhaka"
              style={{ border: "0", height: "100%", width: "100%" }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-second-item" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <form action="https://formspree.io/f/mwkzwylo" method="POST">
              <div className="contact-second-item-input-first">
                <input
                  required
                  name="UserName"
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  required
                  name="email"
                  autoComplete="off"
                  type="email"
                  className="form-control"
                  placeholder="@gmail.com"
                />
              </div>
              <div className="contact-second-item-input-second">
                <input
                  name="Phone"
                  autoComplete="off"
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                />
                <input
                  name="Subject"
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="contact-second-item-input-third">
                <textarea
                  required
                  name="message"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Write Message ..."
                />
              </div>
              <div className="contact-second-item-input-four">
                <button type="submit">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
        {/* contact-third */}
        <div className="contact-third">
          <div className="social-media">
            <a href="https://web.facebook.com/fahad.himel.1?_rdc=1&_rdr">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/fahad-himel-481267227">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p> &copy; 2022 Fahad HImel || All Rights Reserved.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
