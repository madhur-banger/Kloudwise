import React from "react";
import "./powerSection.css";

export default function PowerSection() {
  return (
    <>
      {/* <!-- Power --> */}
      <section className="power h_5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_img wow fadeInLeft" data-wow-delay="0.1s">
                <img src="assets/img/our_expertise.jpg" alt="" style={{ }}/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="power_content cstm_power_content">
                <div className="section_title">
                  <h2 className="wow fadeInLeft" data-wow-delay="0.3s">
                    Our Expertise, <br />
                    Your Advantage
                  </h2>
                </div>
                <ul className="power_list list-unstyled">
                  <li className="wow fadeInLeft" data-wow-delay="0.5s">
                    <h6>
                      <span>01.</span>Selective Clientele Focus
                    </h6>
                    <p>
                      At Kloudwise, we pride ourselves on working exclusively
                      with select clients, ensuring dedicated, high-caliber
                      service for transformative digital experiences.
                    </p>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay="0.7s">
                    <h6>
                      <span>02.</span>Leading with Advanced Tech
                    </h6>
                    <p>
                      Kloudwise harnesses Blockchain, AI, and more to
                      revolutionize your digital infrastructure, setting new
                      standards in web and mobile app development.
                    </p>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay="0.9s">
                    <h6>
                      <span>03.</span>From Ideation to Market
                    </h6>
                    <p>
                      Kloudwise excels in transforming concepts into market-ready
                      products, seamlessly integrating development and marketing
                      for a complete solution.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Power --> */}
    </>
  );
}
