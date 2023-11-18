import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Blog = () => {
  return (
    <React.Fragment>
      <div>
        {/*header area start*/}
        {/*Offcanvas menu area start*/}
        <div className='off_canvars_overlay'></div>
        <Header />
        <div className='breadcrumbs_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='breadcrumb_content'>
                  <ul>
                    <li>
                      <a href='index-2.html'>home</a>
                    </li>
                    <li>All blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='blog_details mt-60'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='blog_wrapper'>
                  <div className='section-title'>
                    <h2>All Blog</h2>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <article className='single_blog mb-60'>
                        <figure>
                          <div className='blog_thumb'>
                            <a href='blog-details.html'>
                              <img src='assets/img/blog/blog1.jpg' alt='' />
                            </a>
                          </div>
                          <figcaption className='blog_content'>
                            <h3>
                              <a href='blog-details.html'>
                                bibendum massa nec, fermentum odio
                              </a>
                            </h3>
                            <div className='blog_meta'>
                              <span className='author'>
                                Posted by : <a href='#'>admin</a> /{" "}
                              </span>
                              <span className='post_date'>
                                On : <a href='#'>April 10, 2019</a>
                              </span>
                            </div>
                            <div className='blog_desc'>
                              <p>
                                Donec vitae hendrerit arcu, sit amet faucibus
                                nisl. Cras pretium arcu ex. Aenean posuere
                                libero eu augue condimentum rhoncus. Praesent
                                ornare tortor ac ante egestas hendrerit. Aliquam
                                et metus pharetra, bibendum massa nec, fermentum
                                odio.{" "}
                              </p>
                            </div>
                            <footer className='readmore_button'>
                              <a href='blog-details.html'>read more</a>
                            </footer>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <article className='single_blog mb-60'>
                        <figure>
                          <div className='blog_thumb'>
                            <a href='blog-details.html'>
                              <img src='assets/img/blog/blog2.jpg' alt='' />
                            </a>
                          </div>
                          <figcaption className='blog_content'>
                            <h3>
                              <a href='blog-details.html'>
                                Aenean posuere libero eu augue
                              </a>
                            </h3>
                            <div className='blog_meta'>
                              <span className='author'>
                                Posted by : <a href='#'>admin</a> /{" "}
                              </span>
                              <span className='post_date'>
                                On : <a href='#'>April 10, 2019</a>
                              </span>
                            </div>
                            <div className='blog_desc'>
                              <p>
                                Donec vitae hendrerit arcu, sit amet faucibus
                                nisl. Cras pretium arcu ex. Aenean posuere
                                libero eu augue condimentum rhoncus. Praesent
                                ornare tortor ac ante egestas hendrerit. Aliquam
                                et metus pharetra, bibendum massa nec, fermentum
                                odio.{" "}
                              </p>
                            </div>
                            <footer className='readmore_button'>
                              <a href='blog-details.html'>read more</a>
                            </footer>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <article className='single_blog'>
                        <figure>
                          <div className='blog_thumb'>
                            <a href='blog-details.html'>
                              <img src='assets/img/blog/blog2.jpg' alt='' />
                            </a>
                          </div>
                          <figcaption className='blog_content'>
                            <h3>
                              <a href='blog-details.html'>
                                Donec vitae hendrerit arcu, sit amet
                              </a>
                            </h3>
                            <div className='blog_meta'>
                              <span className='author'>
                                Posted by : <a href='#'>admin</a> /{" "}
                              </span>
                              <span className='post_date'>
                                On : <a href='#'>April 10, 2019</a>
                              </span>
                            </div>
                            <div className='blog_desc'>
                              <p>
                                Donec vitae hendrerit arcu, sit amet faucibus
                                nisl. Cras pretium arcu ex. Aenean posuere
                                libero eu augue condimentum rhoncus. Praesent
                                ornare tortor ac ante egestas hendrerit. Aliquam
                                et metus pharetra, bibendum massa nec, fermentum
                                odio. Cras et vehicula orci. Curabitur aliquet
                                ullamcorper suscipit. Aliquam erat volutpat.
                                Cras convallis libero mi, sit amet scelerisque
                                elit suscipit id.{" "}
                              </p>
                            </div>
                            <footer className='readmore_button'>
                              <a href='blog-details.html'>read more</a>
                            </footer>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <article className='single_blog'>
                        <figure>
                          <div className='blog_thumb'>
                            <a href='blog-details.html'>
                              <img src='assets/img/blog/blog1.jpg' alt='' />
                            </a>
                          </div>
                          <figcaption className='blog_content'>
                            <h3>
                              <a href='blog-details.html'>
                                Cras pretium arcu ex. Aenean
                              </a>
                            </h3>
                            <div className='blog_meta'>
                              <span className='author'>
                                Posted by : <a href='#'>admin</a> /{" "}
                              </span>
                              <span className='post_date'>
                                On : <a href='#'>April 10, 2019</a>
                              </span>
                            </div>
                            <div className='blog_desc'>
                              <p>
                                Donec vitae hendrerit arcu, sit amet faucibus
                                nisl. Cras pretium arcu ex. Aenean posuere
                                libero eu augue condimentum rhoncus. Praesent
                                ornare tortor ac ante egestas hendrerit. Aliquam
                                et metus pharetra, bibendum massa nec, fermentum
                                odio. Cras et vehicula orci. Curabitur aliquet
                                ullamcorper suscipit. Aliquam erat volutpat.
                                Cras convallis libero mi, sit amet scelerisque
                                elit suscipit id.{" "}
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
              </div>
              <div className='col-lg-3 col-md-12'>
                <div className='blog_sidebar_widget'>
                  <div className='widget_list widget_search'>
                    <h3>Search</h3>
                    <form action='#'>
                      <input placeholder='Search...' type='text' />
                      <button type='submit'>search</button>
                    </form>
                  </div>
                  <div className='widget_list widget_post'>
                    <h3>Recent Posts</h3>
                    <div className='post_wrapper'>
                      <div className='post_thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/img/blog/blog1.jpg' alt='' />
                        </a>
                      </div>
                      <div className='post_info'>
                        <h3>
                          <a href='blog-details.html'>Blog image post</a>
                        </h3>
                        <span>March 16, 2018 </span>
                      </div>
                    </div>
                    <div className='post_wrapper'>
                      <div className='post_thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/img/blog/blog2.jpg' alt='' />
                        </a>
                      </div>
                      <div className='post_info'>
                        <h3>
                          <a href='blog-details.html'>Post with Gallery</a>
                        </h3>
                        <span>March 16, 2018 </span>
                      </div>
                    </div>
                    <div className='post_wrapper'>
                      <div className='post_thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/img/blog/blog1.jpg' alt='' />
                        </a>
                      </div>
                      <div className='post_info'>
                        <h3>
                          <a href='blog-details.html'>Post with Audio</a>
                        </h3>
                        <span>March 16, 2018 </span>
                      </div>
                    </div>
                  </div>
                  <div className='widget_list widget_tag'>
                    <h3>Tag products</h3>
                    <div className='tag_widget'>
                      <ul>
                        <li>
                          <a href='#'>Drone</a>
                        </li>
                        <li>
                          <a href='#'>Sky</a>
                        </li>
                        <li>
                          <a href='#'>Fly</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='blog_pagination'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='pagination'>
                  <ul>
                    <li className='current'>1</li>
                    <li>
                      <a href='#'>2</a>
                    </li>
                    <li>
                      <a href='#'>3</a>
                    </li>
                    <li className='next'>
                      <a href='#'>next</a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-angle-right' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Blog;
