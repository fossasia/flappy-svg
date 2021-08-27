import React from "react";
import FooterComp from "../Footer/FooterComp";

function Download() {
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
                <a href="">Home</a>
                <a href="">Pricing</a>
              </div>
              <h2>Download The Game</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="pricing_area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main_title">
                <h2>Downloads</h2>
                <h1>Downloads</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="pricing_item">
                <h3 class="p_title">Mobile</h3>
                <h1 class="p_price">Android</h1>
                <div class="p_list">
                  <ul>
                    <li>Android 5.0+</li>
                    <li>No Internet Reqd.</li>
                    <li>Light-weight and Fast</li>
                  </ul>
                </div>
                <div class="p_btn">
                  <a
                    class="gradient_btn"
                    href="https://github.com/fossasia/flappy-svg/blob/master/FlappySVG_Android/app-release.apk"
                  >
                    <span>Download APK</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricing_item active">
                <h3 class="p_title">WebApp</h3>
                <h1 class="p_price">Browser Only</h1>
                <div class="p_list">
                  <ul>
                    <li>No Download Reqd.</li>
                    <li>Responsive</li>
                    <li>Fast and Memory Friendly</li>
                  </ul>
                </div>
                <div class="p_btn">
                  <a
                    class="gradient_btn"
                    href="http://flappy.fossasia.org/index.html"
                  >
                    <span>Play on Web</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 hidden-md">
              <div class="pricing_item">
                <h3 class="p_title">Desktop</h3>
                <h1 class="p_price">Windows</h1>
                <div class="p_list">
                  <ul>
                    <li>Win Version 7+</li>
                    <li>Offline</li>
                    <li>4Gb Ram / 100 Mb Free space</li>
                  </ul>
                </div>
                <div class="p_btn">
                  <a
                    class="gradient_btn"
                    href="https://github.com/fossasia/flappy-svg/blob/master/FlappySVG_Windows/FlappySVG.exe?raw=true"
                  >
                    <span>Download for Windows</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </div>
  );
}

export default Download;
