import React from "react";
import ct1 from "../../assets/images/ct1.png";
import ct2 from "../../assets/images/ct2.png";
function Controls() {
  return (
    <div>
      <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
          <div
            class="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
          <div class="container">
            <div class="banner_content text-center">
              <div class="page_link">
                <a href="index.html">Home</a>
                <a href="elements.html">Controls</a>
              </div>
              <h2>How to Play?</h2>
            </div>
          </div>
        </div>
      </section>
      <div class="whole-wrap">
        <div class="container">
          <div class="section-top-border">
            <div class="row">
              <div class="col-md-3">
                <img src={ct1} alt="" class="img-fluid"></img>
              </div>
              <div class="col-md-9 mt-sm-20 left-align-p section-top-border">
                <div class="single-defination">
                  <h4 class="mb-20">01</h4>
                  <p
                    style={{
                      color: "#777777",
                      fontWeight: "500",
                    }}
                  >
                    Tap The Screen To Move The Flappy Object Up
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="section-top-border text-right">
            <div class="row">
              <div class="col-md-9">
                <div class="single-defination">
                  <h4 class="mb-20">02</h4>
                  <p
                    style={{
                      color: "#777777",
                      fontWeight: "500",
                    }}
                  >
                    Avoid colliding with obstacles and hitting the floor
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <img src={ct2} alt="" class="img-fluid"></img>
              </div>
            </div>
          </div>
          <div class="section-top-border">
            <div class="row">
              <div class="col-md-3">
                <img src="img/elements/d.jpg" alt="" class="img-fluid"></img>
              </div>
              <div class="col-md-9 mt-sm-20 left-align-p section-top-border">
                <div class="single-defination">
                  <h4 class="mb-20">03</h4>
                  <p
                    style={{
                      color: "#777777",
                      fontWeight: "500",
                    }}
                  >
                    Hitting the obstacles = GAME OVER!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="section-top-border">
          <h3 class="mb-30 title_color"> KeyBoard Shortcuts</h3>
          <div class="row">
            <div class="col-lg-12">
              <blockquote class="generic-blockquote">
                <kbd>SpaceBar</kbd> Changes characters
                <br />
                <kbd>B</kbd> Changes background
                <br />
                <kbd>Enter</kbd> Starts the gamer
                <br />
                <kbd>R</kbd> Restarts the game
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
