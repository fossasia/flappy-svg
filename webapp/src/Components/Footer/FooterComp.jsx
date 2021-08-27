import React from "react";

function FooterComp() {
  return (
    <div>
      <footer class="footer_area section_gap_top">
        <div class="container">
          <div class="row footer_inner">
            <div class="col-lg-3 col-sm-6 ">
              <aside class="f_widget ab_widget">
                <div class="f_title">
                  <h4>FOSSASIA</h4>
                </div>
                <ul>
                  <li>
                    <a href="https://fossasia.org/"></a>About
                  </li>
                  <li>
                    <a href="https://events.fossasia.org/"></a>Events
                  </li>
                  <li>
                    <a href="https://fossasia.org/#labs-programs"></a>Programs
                  </li>
                  <li>
                    <a href="https://fossasia.com/"></a>Products
                  </li>
                  <li>
                    <a href="https://blog.fossasia.org/"></a>Blog
                  </li>
                </ul>
              </aside>
            </div>
            <div class="col-lg-3 col-sm-6">
              <aside class="f_widget ab_widget">
                <div class="f_title">
                  <h4>Flappy-SVG</h4>
                </div>
                <ul>
                  <li>
                    <a href="#"></a>About
                  </li>
                  <li>
                    <a href="https://github.com/fossasia/flappy-svg/tree/master"></a>
                    Github
                  </li>
                  <li>
                    <a href="https://github.com/fossasia/flappy-svg/graphs/contributors"></a>
                    Contributors
                  </li>
                  <li>
                    <a href="https://github.com/fossasia/flappy-svg/pulls"></a>
                    Pull Requests
                  </li>

                  <li>
                    <a href="http://fossasia.github.io/flappy-svg/"></a>Github
                    Pages
                  </li>
                </ul>
              </aside>
            </div>
            <div class="col-lg-3 col-sm-6">
              <aside class="f_widget ab_widget">
                <div class="f_title">
                  <h4>About Me</h4>
                </div>
                <ul>
                  <li>
                    <a href="https://daimk1.web.app/"></a>About
                  </li>
                  <li>
                    <a href="https://github.com/Daim-Nickel-Penny"></a>
                    Github
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div class="row single-footer-widget">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="copy_right_text">
                <p>Built using React</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="social_widget">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i class="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComp;
