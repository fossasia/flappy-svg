import React from "react";
import styled from "styled-components";

import homeLeft from "../../assets/images/home-left.png";

import Navbar from "../NavbarFolder/NavbarComponent";
import About from "../About/About";
import homeRes from "../../res/homeRes";
import Contributions from "../Contributions/Contributions";
import LottieAnimation from "../../Lottie";
import flappyAnim from "../Animations/flappyAnim.json";
export const MainHeader = styled.h1`
  color: red;
  font-weight: 700;
  letter-spacing: 1rem;
`;

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home_left_img">
                  <img className="img-fluid" src={homeLeft} alt=""></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner_content">
                  <h2>
                    {homeRes.headerText[1]} <br />
                  </h2>
                  <h3 style={{ textAlign: "center" }}>
                    {homeRes.headerText[3]}
                    <br />
                  </h3>
                  <h2>
                    {homeRes.headerText[2]}
                    <br />
                  </h2>
                  <p>
                    {homeRes.details[1]}
                    <br />
                    {homeRes.details[2]}
                  </p>
                  <p></p>
                  <div className="d-flex align-items-center">
                    <a
                      id="play-home-video"
                      className="video-play-button"
                      href="http://flappy.fossasia.org/index.html"
                    >
                      <span></span>
                    </a>
                    <div className="watch_video text-uppercase">Play Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
    </div>
  );
}
