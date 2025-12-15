'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./serviceSection.css";

export default function ServiceSection() {
  return (
    <>
      {/* <!-- Service Box --> */}
      <section className="service_box h_5" id="our-services">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="wow fadeInLeft" data-wow-delay="0.1s">
              Our services
            </h2>
          </div>
          <div className="min_service_box_area">
            <div className="row">
              <div className="col-xl-4">
                <div
                  className="single_service_box wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/img/icon/service_box/2.svg" alt="" />
                  <h4>Branding & Design</h4>
                  <p>
                    Right from brand design to UI/UX we cover everything to help
                    you bring your ideas to life!
                  </p>
                  <a href="#projects-section" className="text_btn">
                    Learn more <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="single_service_box wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/icon/service_box/1.svg" alt="" />
                  <h4>Development</h4>
                  <p>
                    We have a team of experienced developers to turn your ideas
                    to product.
                    <br />
                    Blockchain, AI, Web Development, Mobile App Development,
                    Custom Infrastructure
                  </p>
                  <a href="#projects-section" className="text_btn">
                    Learn more <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="single_service_box wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <img src="assets/img/icon/service_box/3.svg" alt="" />
                  <h4>Digital Marketing</h4>
                  <p>
                    Get your ideas in front of the right audience.
                    <br />
                    Our services include Digital Marketing, Social Media
                    Management, Influencer Marketing, UGC ads and even Video
                    Production
                  </p>
                  <a href="#contact-section" className="text_btn">
                    Learn more <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service Box --> */}
    </>
  );
}
