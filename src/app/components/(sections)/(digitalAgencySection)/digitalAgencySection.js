import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./digitalAgencySection.css";

export default function DigitalAgencySection() {
  return (
    <>
      {/* <!-- Digital Agency --> */}
      <section className="digital_agency h_4" id="digital-agency">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_img wow fadeInLeft" data-wow-delay="0.1s">
                <img
                  className="img-fluid profile-image"
                  src="assets/img/madhur.JPG"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content cstm_content_das_mob">
                <div
                  className="section_title"
                >
                  <h2>We help you execute your ideas</h2>
                </div>
                <p className="wow fadeInLeft" data-wow-delay="0.5s">
                  If you have an idea, we can help you execute it from scratch.
                  <br />
                  Right from designing and developing apps, websites, to
                  marketing your product, we are truly the one stop solution.
                </p>
                <ul className="agency_list list-unstyled">
                  <li className="wow fadeInLeft" data-wow-delay="0.7s">
                    <FontAwesomeIcon icon={faArrowRight} /> Are you looking to
                    hire professionals?
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay="0.9s">
                    <FontAwesomeIcon icon={faArrowRight} /> Are you lacking a
                    strong team?
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay="1.1s">
                    <FontAwesomeIcon icon={faArrowRight} /> Do you want to bring
                    your ideas to life?
                  </li>
                </ul>
                <a
                  href="#contact-section"
                  className="bg_btn_color wow fadeInLeft"
                  data-wow-delay="1.3s"
                >
                  Contact Us <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Digital Agency --> */}
    </>
  );
}
