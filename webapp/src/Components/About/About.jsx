import React from "react";
import Marquee from "react-fast-marquee";
import aboutImg from "../../assets/images/about_img.png";
import aboutRes from "../../res/aboutres";
import contributionsRes from "../../res/contributionsRes";
import Contributions from "../Contributions/Contributions";
import { Avatar, Chip } from "@material-ui/core";
import SubscribeComp from "../Subscribe/SubscribeComp";
import { Tooltip } from "@material-ui/core";
import LottieAnimation from "../../Lottie";
import flappyAnim from "../Animations/flappyAnim.json";
import congrats from "../Animations/congrats.json";
function About() {
  return (
    <div>
      <section className="about_us_area section_gap_top">
        <div className="container">
          <div className="row about_content align-items-center">
            <div className="col-lg-12">
              <div className="section_content">
                <div className="row">
                  <div className="col-lg-6">
                    <h6 style={{ fontSize: "1.5rem" }}>About</h6>
                    <h1>{aboutRes.headerText.text}</h1>
                    <p>{aboutRes.aboutText.text}</p>
                    <div>
                      <a
                        className="primary_btn"
                        href="#"
                        style={{ margin: "5px 7px" }}
                      >
                        Play Now
                      </a>
                      <a
                        className="primary_btn"
                        href="#"
                        style={{ margin: "5px 7px" }}
                      >
                        Contribute
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about_us_image_box justify-content-center">
                      {/* <img
                        className="img-fluid w-100"
                        src={aboutImg}
                        alt=""
                      ></img> */}
                      <LottieAnimation
                        lotti={flappyAnim}
                        height={300}
                        width={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="about_us_image_box justify-content-center">
                <img className="img-fluid w-100" src={aboutImg} alt=""></img>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="section_gap_top">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-12">
              <div className="section_content">
                <div class="main_title">
                  <h2>Contributions</h2>

                  <h1 style={{ color: "black" }}>Contributions</h1>
                  <LottieAnimation lotti={congrats} height={100} width={100} />
                </div>
                <div style={{ marginTop: "45px" }}>
                  <p style={{ color: "black" }}>{contributionsRes.paragraph}</p>

                  <Tooltip
                    title="If you are a contributor and your name is missing. Make a PR with your name and contribution details"
                    arrow
                  >
                    <a
                      className="primary_btn"
                      href="#"
                      style={{ margin: "5px 0px 65px 0px" }}
                    >
                      Contributor?
                    </a>
                  </Tooltip>

                  <Marquee
                    pauseOnHover={true}
                    speed={60}
                    loop={0}
                    gradient={true}
                  >
                    <Contributions />
                  </Marquee>
                </div>
              </div>
              <div className="section_content">
                <div class="main_title">
                  <h2>Credits To</h2>
                  <h1 style={{ color: "black" }}>Credits To</h1>
                </div>
                <div className="row" style={{ marginTop: "45px" }}>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-6">
                    {" "}
                    <Chip
                      size="small"
                      avatar={<Avatar>L</Avatar>}
                      label="Lionel T(Github Edge)"
                      clickable
                      onClick={() =>
                        window.open(
                          "http://codepen.io/elrumordelaluz/pen/XmygWX"
                        )
                      }
                      color="primary"
                      style={{ margin: "0px 75px" }}
                    />
                    <Chip
                      size="small"
                      avatar={<Avatar>R</Avatar>}
                      label="Rotoscopes"
                      clickable
                      onClick={() =>
                        window.open(
                          "https://github.com/niccokunzmann/rotoscopes/"
                        )
                      }
                      color="primary"
                      style={{ margin: "0px 15px" }}
                    />
                  </div>
                  <div className="col-sm-3"></div>
                </div>
                <div className="row" style={{ marginTop: "45px" }}>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-5">
                    {" "}
                    <Chip
                      size="small"
                      avatar={<Avatar>R</Avatar>}
                      label="Dan Reyes for APK.png"
                      clickable
                      onClick={() => window.open("")}
                      color="primary"
                      style={{ margin: "0px 15px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeComp />
    </div>
  );
}

export default About;
