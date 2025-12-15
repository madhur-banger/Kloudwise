"use client";
import React from "react";
import { motion } from "framer-motion";
import "./testimonial.css";

const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

export default function Testimonial() {
  return (
    <>
      {/* <!-- Testimonial --> */}
      <section className="testimonial cst_testimonial_mob">
        <div className="container">
          <div className="min_testimonial_area cstm_min_testimonial_1440px" >
            <div className="single_testimonial cst_single_testimonial_1440px" >
              <img src="assets/img/testimonial/icon.png" alt="" />
              <p>
              &quot;We’ve worked with multiple agencies in the past but they could
                never match the quality we got here. Thanks Ali for the
                excellent communication throughout the process!&quot;
              </p>
              <div className="testimonial_people">
                <span className="name">Namita</span>
                <span>, </span>
                <span className="des">Schbang for Kotak 811</span>
              </div>
            </div>
            <div className="single_testimonial cst_single_testimonial_1440px">
              <img src="assets/img/testimonial/icon.png" alt="" />
              <p>
              &quot;Smooth communication, great work, and a very professional
                team!&quot;
              </p>
              <div className="testimonial_people">
                <span className="name">Irina</span>
                <span>, </span>
                <span className="des">Brizy</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape_img">
          <motion.img
              src="assets/img/testimonial/shape/1.png"
              alt=""
              className="one"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRightVariant}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
          <motion.img
              src="assets/img/testimonial/shape/2.png"
              alt=""
              className="two"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeftVariant}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
        </div> */}
      </section>
      {/* <!-- Testimonial --> */}
    </>
  );
}
