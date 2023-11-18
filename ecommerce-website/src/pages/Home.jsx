import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <div className='off_canvars_overlay'></div>
        <Header />
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div  className="bg-light border rounded border-light hero-nature carousel-hero jumbotron py-5 px-4">
                    <h1 className="hero-title">Hero Nature</h1>
                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <p><a className="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="bg-light border rounded border-light hero-photography carousel-hero jumbotron py-5 px-4">
                    <h1 className="hero-title">Hero Photography</h1>
                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <p><a className="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="bg-light border rounded border-light hero-technology carousel-hero jumbotron py-5 px-4">
                    <h1 className="hero-title">Hero Technology</h1>
                    <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <p><a className="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
                </div>
            </div>
        </div>
        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
        <ol className="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
        </ol>
        </div>
        {/*slider area end*/}
        {/*Tranding product*/}
        <section className='pt-60 pb-30 gray-bg'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <div className='section-title'>
                  <h2>Trending Products</h2>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-tranding'>
                  <a href='product-details.html'>
                    <div className='tranding-pro-img'>
                      <img src='assets/img/product/tranding-1.jpg' alt='' />
                    </div>
                    <div className='tranding-pro-title'>
                      <h3>Meyoji Robast Drone</h3>
                      <h4>Drone</h4>
                    </div>
                    <div className='tranding-pro-price'>
                      <div className='price_box'>
                        <span className='current_price'>$70.00</span>
                        <span className='old_price'>$80.00</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-tranding'>
                  <a href='product-details.html'>
                    <div className='tranding-pro-img'>
                      <img src='assets/img/product/tranding-2.jpg' alt='' />
                    </div>
                    <div className='tranding-pro-title'>
                      <h3>Ut praesentium earum</h3>
                      <h4>Mevrik</h4>
                    </div>
                    <div className='tranding-pro-price'>
                      <div className='price_box'>
                        <span className='current_price'>$70.00</span>
                        <span className='old_price'>$80.00</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-tranding'>
                  <a href='product-details.html'>
                    <div className='tranding-pro-img'>
                      <img src='assets/img/product/tranding-3.jpg' alt='' />
                    </div>
                    <div className='tranding-pro-title'>
                      <h3>Consectetur adipisicing</h3>
                      <h4>Flyer</h4>
                    </div>
                    <div className='tranding-pro-price'>
                      <div className='price_box'>
                        <span className='current_price'>$70.00</span>
                        <span className='old_price'>$80.00</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Tranding product*/}
        {/*Features area*/}
        <section className='features-area pt-60 pb-60'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <div className='section-title'>
                  <h2>Awesome Features</h2>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-features'>
                  <img src='assets/img/icon/1.png' alt='' />
                  <h3>Impressive Distance</h3>
                  <p>
                    consectetur adipisicing elit. Ut praesentium earum,
                    blanditiis, voluptatem repellendus rerum voluptatibus
                    dignissimos
                  </p>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-features'>
                  <img src='assets/img/icon/2.png' alt='' />
                  <h3>100% self safe</h3>
                  <p>
                    consectetur adipisicing elit. Ut praesentium earum,
                    blanditiis, voluptatem repellendus rerum voluptatibus
                    dignissimos
                  </p>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-features'>
                  <img src='assets/img/icon/3.png' alt='' />
                  <h3>Awesome Support</h3>
                  <p>
                    consectetur adipisicing elit. Ut praesentium earum,
                    blanditiis, voluptatem repellendus rerum voluptatibus
                    dignissimos
                  </p>
                </div>
              </div>
              <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                <a href='#'>
                  <img src='assets/img/product/2.png' alt='' />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Features area*/}
        {/*Features area*/}
        <section className='gray-bg pt-60 pb-60'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1 order-sm-1'>
                <div className='pro-details-feature'>
                  <img src='assets/img/product/1.png' alt='' />
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2 order-sm-2'>
                <div className='pro-details-feature'>
                  <h3>Long Lasting</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <ul>
                    <li>It is a long established fact that</li>
                    <li>Many desktop publishing</li>
                    <li>
                      Various versions have evolved over the years, sometimes by
                      accident
                    </li>
                    <li>There are many variations of passages</li>
                    <li>If you are going to use a</li>
                    <li>Alteration in some form, by injected</li>
                  </ul>
                  <a href='#'>$70 Buy now</a>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 order-lg-3 order-md-4 order-sm-4 order-4'>
                <div className='pro-details-feature'>
                  <h3>Impressive Distance</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <ul>
                    <li>It is a long established fact that</li>
                    <li>Many desktop publishing</li>
                    <li>
                      Various versions have evolved over the years, sometimes by
                      accident
                    </li>
                    <li>There are many variations of passages</li>
                    <li>If you are going to use a</li>
                    <li>Alteration in some form, by injected</li>
                  </ul>
                  <a href='#'>$70 Buy now</a>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 order-lg-4 order-md-3 order-sm-3 order-3'>
                <div className='pro-details-feature'>
                  <img src='assets/img/product/1.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Features area*/}
        {/*product details start*/}
        <div className='product_details mt-60 mb-60'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='product-details-tab'>
                  <div id='img-1' className='zoomWrapper single-zoom'>
                    <a href='#'>
                      <img
                        id='zoom1'
                        src='assets/img/product/details-1.jpg'
                        data-zoom-image='assets/img/product/details-1.jpg'
                        alt='big-1'
                      />
                    </a>
                  </div>
                  <div className='single-zoom-thumb'>
                    <ul
                      className='s-tab-zoom owl-carousel single-product-active'
                      id='gallery_01'
                    >
                      <li>
                        <a
                          href='#'
                          className='elevatezoom-gallery active'
                          data-update
                          data-image='assets/img/product/details-2.jpg'
                          data-zoom-image='assets/img/product/details-2.jpg'
                        >
                          <img
                            src='assets/img/product/details-2.jpg'
                            alt='zo-th-1'
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='elevatezoom-gallery active'
                          data-update
                          data-image='assets/img/product/details-3.jpg'
                          data-zoom-image='assets/img/product/details-3.jpg'
                        >
                          <img
                            src='assets/img/product/details-3.jpg'
                            alt='zo-th-1'
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='elevatezoom-gallery active'
                          data-update
                          data-image='assets/img/product/details-4.jpg'
                          data-zoom-image='assets/img/product/details-4.jpg'
                        >
                          <img
                            src='assets/img/product/details-4.jpg'
                            alt='zo-th-1'
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='elevatezoom-gallery active'
                          data-update
                          data-image='assets/img/product/details-1.jpg'
                          data-zoom-image='assets/img/product/details-1.jpg'
                        >
                          <img
                            src='assets/img/product/details-1.jpg'
                            alt='zo-th-1'
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='product_d_right'>
                  <form action='#'>
                    <h1>Meyoji Robast Drone Fusce ultricies massa</h1>
                    <div className=' product_ratting'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fa fa-star' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-star' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-star' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-star' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-star' />
                          </a>
                        </li>
                        <li className='review'>
                          <a href='#'> (250 reviews) </a>
                        </li>
                      </ul>
                    </div>
                    <div className='price_box'>
                      <span className='current_price'>$70.00</span>
                      <span className='old_price'>$80.00</span>
                    </div>
                    <div className='product_desc'>
                      <ul>
                        <li>In Stock</li>
                        <li>Free delivery available*</li>
                        <li>Sale 30% Off Use Code : 'Drophut'</li>
                      </ul>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will
                      </p>
                    </div>
                    <div className='product_timing'>
                      <div data-countdown='2021/6/28' />
                    </div>
                    <div className='product_variant color'>
                      <h3>Available Options</h3>
                      <label>color</label>
                      <ul>
                        <li className='color1'>
                          <a href='#' />
                        </li>
                        <li className='color2'>
                          <a href='#' />
                        </li>
                        <li className='color3'>
                          <a href='#' />
                        </li>
                        <li className='color4'>
                          <a href='#' />
                        </li>
                      </ul>
                    </div>
                    <div className='product_variant quantity'>
                      <label>quantity</label>
                      <input min={1} max={100} defaultValue={1} type='number' />
                      <button className='button' type='submit'>
                        Buy now
                      </button>
                    </div>
                    <div className='product_meta'>
                      <span>
                        Category: <a href='#'>Drone</a>
                      </span>
                    </div>
                  </form>
                  <div className='priduct_social'>
                    <ul>
                      <li>
                        <a className='facebook' href='#' title='facebook'>
                          <i className='fa fa-facebook' /> Like
                        </a>
                      </li>
                      <li>
                        <a className='twitter' href='#' title='twitter'>
                          <i className='fa fa-twitter' /> tweet
                        </a>
                      </li>
                      <li>
                        <a className='pinterest' href='#' title='pinterest'>
                          <i className='fa fa-pinterest' /> save
                        </a>
                      </li>
                      <li>
                        <a className='google-plus' href='#' title='google +'>
                          <i className='fa fa-google-plus' /> share
                        </a>
                      </li>
                      <li>
                        <a className='linkedin' href='#' title='linkedin'>
                          <i className='fa fa-linkedin' /> linked
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*product details end*/}
        {/*area*/}
        <section className='pt-60 pb-60 gray-bg'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <div className='section-title'>
                  <h2>Watch it now</h2>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12'>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src='https://player.vimeo.com/video/136938394?color=FA5252&title=0&byline=0'
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    allow='autoplay; fullscreen'
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*area*/}
        {/*Other product*/}
        <section className='pt-60 pb-30'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <div className='section-title'>
                  <h2>Other collections</h2>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-tranding mb-30'>
                  <a href='product-details.html'>
                    <div className='tranding-pro-img'>
                      <img src='assets/img/product/tranding-1.jpg' alt='' />
                    </div>
                    <div className='tranding-pro-title'>
                      <h3>Meyoji Robast Drone</h3>
                      <h4>Drone</h4>
                    </div>
                    <div className='tranding-pro-price'>
                      <div className='price_box'>
                        <span className='current_price'>$70.00</span>
                        <span className='old_price'>$80.00</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-tranding mb-30'>
                  <a href='product-details.html'>
                    <div className='tranding-pro-img'>
                      <img src='assets/img/product/tranding-2.jpg' alt='' />
                    </div>
                    <div className='tranding-pro-title'>
                      <h3>Ut praesentium earum</h3>
                      <h4>Mevrik</h4>
                    </div>
                    <div className='tranding-pro-price'>
                      <div className='price_box'>
                        <span className='current_price'>$70.00</span>
                        <span className='old_price'>$80.00</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12'>
                <div className='single-tranding mb-30'>
                  <a href='product-details.html'>
                    <div className='tranding-pro-img'>
                      <img src='assets/img/product/tranding-3.jpg' alt='' />
                    </div>
                    <div className='tranding-pro-title'>
                      <h3>Consectetur adipisicing</h3>
                      <h4>Flyer</h4>
                    </div>
                    <div className='tranding-pro-price'>
                      <div className='price_box'>
                        <span className='current_price'>$70.00</span>
                        <span className='old_price'>$80.00</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Other product*/}
        {/*Testimonials*/}
        <section className='pb-60 pt-60 gray-bg'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <div className='testimonial_are'>
                  <div className='testimonial_active owl-carousel'>
                    <article className='single_testimonial'>
                      <figure>
                        <div className='testimonial_thumb'>
                          <a href='#'>
                            <img src='assets/img/about/team-3.jpg' alt='' />
                          </a>
                        </div>
                        <figcaption className='testimonial_content'>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45
                          </p>
                          <h3>
                            <a href='#'>Kathy Young</a>
                            <span> - CEO of SunPark</span>
                          </h3>
                        </figcaption>
                      </figure>
                    </article>
                    <article className='single_testimonial'>
                      <figure>
                        <div className='testimonial_thumb'>
                          <a href='#'>
                            <img src='assets/img/about/team-1.jpg' alt='' />
                          </a>
                        </div>
                        <figcaption className='testimonial_content'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even
                          </p>
                          <h3>
                            <a href='#'>John Sullivan</a>
                            <span> - Customer</span>
                          </h3>
                        </figcaption>
                      </figure>
                    </article>
                    <article className='single_testimonial'>
                      <figure>
                        <div className='testimonial_thumb'>
                          <a href='#'>
                            <img src='assets/img/about/team-2.jpg' alt='' />
                          </a>
                        </div>
                        <figcaption className='testimonial_content'>
                          <p>
                            College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem Ipsum
                            passage, and going through the cites
                          </p>
                          <h3>
                            <a href='#'>Jenifer Brown</a>
                            <span> - Manager of AZ</span>
                          </h3>
                        </figcaption>
                      </figure>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/Testimonials*/}
        {/*Blog*/}
        <section className='pt-60'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <div className='section-title'>
                  <h2>Blog Posts</h2>
                </div>
              </div>
            </div>
            <div className='row blog_wrapper'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                <article className='single_blog mb-60'>
                  <figure>
                    <div className='blog_thumb'>
                      <a href='blog-details.html'>
                        <img src='assets/img/blog/blog2.jpg' alt='' />
                      </a>
                    </div>
                    <figcaption className='blog_content'>
                      <h3>
                        <a href='blog-details.html'>How to start drone</a>
                      </h3>
                      <div className='blog_meta'>
                        <span className='author'>
                          Posted by : <a href='#'>Rahul</a> /{" "}
                        </span>
                        <span className='post_date'>
                          <a href='#'>Sep 20, 2019</a>
                        </span>
                      </div>
                      <div className='blog_desc'>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less
                        </p>
                      </div>
                      <footer className='readmore_button'>
                        <a href='blog-details.html'>read more</a>
                      </footer>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                <article className='single_blog blog_bidio mb-60'>
                  <figure>
                    <div className='blog_thumb'>
                      <a href='blog-details.html'>
                        <img src='assets/img/blog/blog1.jpg' alt='' />
                      </a>
                    </div>
                    <figcaption className='blog_content'>
                      <h3>
                        <a href='blog-details.html'>See the tutorial</a>
                      </h3>
                      <div className='blog_meta'>
                        <span className='author'>
                          Posted by : <a href='#'>Rahul</a> /{" "}
                        </span>
                        <span className='post_date'>
                          On : <a href='#'>Aug 25, 2019</a>
                        </span>
                      </div>
                      <div className='blog_desc'>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less
                        </p>
                      </div>
                      <footer className='readmore_button'>
                        <a href='blog-details.html'>read more</a>
                      </footer>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                <article className='single_blog mb-60'>
                  <figure>
                    <div className='blog_thumb'>
                      <a href='blog-details.html'>
                        <img src='assets/img/blog/blog-details.jpg' alt='' />
                      </a>
                    </div>
                    <figcaption className='blog_content'>
                      <h3>
                        <a href='blog-details.html'>How to start drone</a>
                      </h3>
                      <div className='blog_meta'>
                        <span className='author'>
                          Posted by : <a href='#'>Rahul</a> /{" "}
                        </span>
                        <span className='post_date'>
                          <a href='#'>Sep 20, 2019</a>
                        </span>
                      </div>
                      <div className='blog_desc'>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less
                        </p>
                      </div>
                      <footer className='readmore_button'>
                        <a href='blog-details.html'>read more</a>
                      </footer>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/*/Blog*/}
        {/*shipping area start*/}
        <section className='shipping_area'>
          <div className='container'>
            <div className=' row'>
              <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                <div className='single_shipping'>
                  <div className='shipping_icone'>
                    <img src='assets/img/about/shipping1.png' alt='' />
                  </div>
                  <div className='shipping_content'>
                    <h2>Free Shipping</h2>
                    <p>Free shipping on all US order</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                <div className='single_shipping'>
                  <div className='shipping_icone'>
                    <img src='assets/img/about/shipping2.png' alt='' />
                  </div>
                  <div className='shipping_content'>
                    <h2>Support 24/7</h2>
                    <p>Contact us 24 hours a day</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                <div className='single_shipping'>
                  <div className='shipping_icone'>
                    <img src='assets/img/about/shipping3.png' alt='' />
                  </div>
                  <div className='shipping_content'>
                    <h2>100% Money Back</h2>
                    <p>You have 30 days to Return</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                <div className='single_shipping'>
                  <div className='shipping_icone'>
                    <img src='assets/img/about/shipping4.png' alt='' />
                  </div>
                  <div className='shipping_content'>
                    <h2>Payment Secure</h2>
                    <p>We ensure secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*shipping area end*/}
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
export default Home;
