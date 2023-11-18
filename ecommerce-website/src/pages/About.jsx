import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <React.Fragment>
      <div>
        {/*header area start*/}
        {/*Offcanvas menu area start*/}
        <div className='off_canvars_overlay'></div>
        <Header />
        {/*breadcrumbs area start*/}
        <div className='breadcrumbs_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='breadcrumb_content'>
                  <ul>
                    <li>
                      <a href='index-2.html'>home</a>
                    </li>
                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumbs area end*/}
        {/*about section area */}
        <section className='about_section mt-60'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12'>
                <figure>
                  <div className='about_thumb'>
                    <img src='assets/img/about/about1.jpg' alt='' />
                  </div>
                  <figcaption className='about_content'>
                    <h1>eCommerce Bootstrap Template for Electronics Store</h1>
                    <p>
                      Adipiscing lacus ut elementum, nec duis, tempor litora
                      turpis dapibus. Imperdiet cursus odio tortor in elementum.
                      Egestas nunc eleifend feugiat lectus laoreet, vel nunc
                      taciti integer cras. Hac pede dis, praesent nibh ac dui
                      mauris sit. Pellentesque mi, facilisi mauris, elit sociis
                      leo sodales accumsan. Iaculis ac fringilla torquent lorem
                      consectetuer, sociosqu phasellus risus urna aliquam,
                      ornare.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/*about section end*/}
        {/*services img area*/}
        <div className='about_gallery_section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <article className='single_gallery_section'>
                  <figure>
                    <div className='gallery_thumb'>
                      <img src='assets/img/about/about2.jpg' alt='' />
                    </div>
                    <figcaption className='about_gallery_content'>
                      <h3>What do we do?</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution of letters, as
                        opposed to using ‘Content here, content here’, making it
                        look like readable English.
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className='col-lg-6 col-md-6'>
                <article className='single_gallery_section'>
                  <figure>
                    <div className='gallery_thumb'>
                      <img src='assets/img/about/about3.jpg' alt='' />
                    </div>
                    <figcaption className='about_gallery_content'>
                      <h3>History Of Us</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution of letters, as
                        opposed to using ‘Content here, content here’, making it
                        look like readable English.
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/*services img end*/}
        {/*chose us area start*/}
        <div className='choseus_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-4'>
                <div className='single_chose'>
                  <div className='chose_icone'>
                    <img src='assets/img/about/About_icon1.png' alt='' />
                  </div>
                  <div className='chose_content'>
                    <h3>Money Back Guarantee</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='single_chose'>
                  <div className='chose_icone'>
                    <img src='assets/img/about/About_icon2.png' alt='' />
                  </div>
                  <div className='chose_content'>
                    <h3>Creative Design</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='single_chose'>
                  <div className='chose_icone'>
                    <img src='assets/img/about/About_icon3.png' alt='' />
                  </div>
                  <div className='chose_content'>
                    <h3>High Quality</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*chose us area end*/}
        {/*team area start*/}
        <div className='team_area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <article className='team_member'>
                  <figure>
                    <div className='team_thumb'>
                      <img src='assets/img/about/team-1.jpg' alt='' />
                    </div>
                    <figcaption className='team_content'>
                      <h3>John Carter</h3>
                      <h5>Support Engineer</h5>
                      <p>
                        Phone: +(800) 123 456 789 <br /> Email: john@example.com
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <article className='team_member'>
                  <figure>
                    <div className='team_thumb'>
                      <img src='assets/img/about/team-2.jpg' alt='' />
                    </div>
                    <figcaption className='team_content'>
                      <h3>Mary Marlive</h3>
                      <h5>Delevery Manager</h5>
                      <p>
                        Phone: +(800) 123 456 789 <br /> Email: john@example.com
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <article className='team_member'>
                  <figure>
                    <div className='team_thumb'>
                      <img src='assets/img/about/team-3.jpg' alt='' />
                    </div>
                    <figcaption className='team_content'>
                      <h3>Michael Corn</h3>
                      <h5>Quality Controller</h5>
                      <p>
                        Phone: +(800) 123 456 789 <br /> Email: john@example.com
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <article className='team_member'>
                  <figure>
                    <div className='team_thumb'>
                      <img src='assets/img/about/team-4.jpg' alt='' />
                    </div>
                    <figcaption className='team_content'>
                      <h3>James Troops</h3>
                      <h5>Program assistant</h5>
                      <p>
                        Phone: +(800) 123 456 789 <br /> Email: john@example.com
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/*team area end*/}
        {/*footer area start*/}
        <Footer />
        {/*footer area end*/}
        {/* JS
============================================ */}
        {/* Plugins JS */}
        {/* Main JS */}
      </div>
    </React.Fragment>
  );
};
export default About;
