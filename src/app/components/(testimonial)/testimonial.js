"use client";
import React from "react";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <>
      {/* <!-- Testimonial --> */}
      <section className="testimonial cst_testimonial_mob">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="wow fadeInLeft" data-wow-delay="0.1s">
              What Our Clients Say
            </h2>
          </div>
          <div className="min_testimonial_area">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="single_testimonial_card wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/testimonial/icon.png" alt="" className="quote-icon" />
                  <p>
                    We have worked with multiple agencies in the past but they could
                    never match the quality we got here. Thanks for the
                    excellent communication throughout the process!
                  </p>
                  <div className="testimonial_people">
                    <span className="name">Namita</span>
                    <span>, </span>
                    <span className="des">Schbang for Kotak 811</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="single_testimonial_card wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/img/testimonial/icon.png" alt="" className="quote-icon" />
                  <p>
                    Smooth communication, great work, and a very professional
                    team!
                  </p>
                  <div className="testimonial_people">
                    <span className="name">Irina</span>
                    <span>, </span>
                    <span className="des">Brizy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial --> */}
    </>
  );
}