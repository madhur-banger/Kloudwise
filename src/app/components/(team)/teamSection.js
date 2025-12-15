import React from "react";

export default function TeamSection() {
  return (
    <>
      {/* <!-- Team --> */}
      <section className="team">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="wow fadeInLeft" data-wow-delay="0.1s">
              Meet our team members
            </h2>
          </div>
          <div className="min_team_area">
            <div className="single_team wow fadeInLeft" data-wow-delay="0.3s">
              <img src="assets/img/team/1.png" alt="" />
              <h5>
                <a href="team-single.html">Trian Dominguez</a>
              </h5>
              <span>Visual designer</span>
            </div>
            <div className="single_team wow fadeInLeft" data-wow-delay="0.5s">
              <img src="assets/img/team/2.png" alt="" />
              <h5>
                <a href="team-single.html">Cohnor Delaney</a>
              </h5>
              <span>Photographer</span>
            </div>
            <div className="single_team wow fadeInLeft" data-wow-delay="0.7s">
              <img src="assets/img/team/3.png" alt="" />
              <h5>
                <a href="team-single.html">Enzon Hammond</a>
              </h5>
              <span>Content writer</span>
            </div>
            <div className="single_team wow fadeInLeft" data-wow-delay="0.9s">
              <img src="assets/img/team/1.png" alt="" />
              <h5>
                <a href="team-single.html">Trian Dominguez</a>
              </h5>
              <span>Visual designer</span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team --> */}
    </>
  );
}
