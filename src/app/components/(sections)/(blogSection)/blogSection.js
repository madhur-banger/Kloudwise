import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./blogSection.css";

export default function BlogSection() {
  return (
    <>
      {/* <!-- Blog --> */}
      <section className="blog">
        <div className="container">
          <div
            className="section_title text-center wow fadeInLeft"
            data-wow-delay="0.1s"
          >
            <h2>Our news & articles</h2>
          </div>
          <div className="min_blog_area custom_blog_area">
            <div className="custom_blog_container">
              <div
                className="single_blog custom_single_blog wow fadeInLeft"
                data-wow-delay="0.7s"
              >
                <div className="blog_top">
                  <img src="assets/img/blog/1.png" alt="" />
                  <span className="author">
                    <a href="blog-single.html">by Justyna Labadz</a>
                  </span>
                </div>
                <div className="blog_bottom">
                  <div className="date_cetagory">
                    <span className="date">March 12, 2022</span>
                    <span>/</span>
                    <span className="cetagory">Development</span>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Digital marketing for online business
                    </a>
                  </h4>
                  <a href="blog-single.html" className="text_btn">
                    Read more <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className="custom_blog_container">
              <div
                className="single_blog custom_single_blog wow fadeInLeft"
                data-wow-delay="0.7s"
              >
                <div className="blog_top">
                  <img src="assets/img/blog/1.png" alt="" />
                  <span className="author">
                    <a href="blog-single.html">by Justyna Labadz</a>
                  </span>
                </div>
                <div className="blog_bottom">
                  <div className="date_cetagory">
                    <span className="date">March 12, 2022</span>
                    <span>/</span>
                    <span className="cetagory">Development</span>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Digital marketing for online business
                    </a>
                  </h4>
                  <a href="blog-single.html" className="text_btn">
                    Read more <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className="custom_blog_container">
              <div
                className="single_blog custom_single_blog wow fadeInLeft"
                data-wow-delay="0.7s"
              >
                <div className="blog_top">
                  <img src="assets/img/blog/1.png" alt="" />
                  <span className="author">
                    <a href="blog-single.html">by Justyna Labadz</a>
                  </span>
                </div>
                <div className="blog_bottom">
                  <div className="date_cetagory">
                    <span className="date">March 12, 2022</span>
                    <span>/</span>
                    <span className="cetagory">Development</span>
                  </div>
                  <h4>
                    <a href="blog-single.html">
                      Digital marketing for online business
                    </a>
                  </h4>
                  <a href="blog-single.html" className="text_btn">
                    Read more <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog --> */}
    </>
  );
}
