import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BlogDetails = () => {
  return (
    <React.Fragment>
      <div>
        {/*header area start*/}
        {/*Offcanvas menu area start*/}
        <div className='off_canvars_overlay'></div>
        {/* <div className='Offcanvas_menu'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='canvas_open'>
                  <a href='javascript:void(0)'>
                    <i className='ion-navicon' />
                  </a>
                </div>
                <div className='Offcanvas_menu_wrapper'>
                  <div className='canvas_close'>
                    <a href='javascript:void(0)'>
                      <i className='ion-android-close' />
                    </a>
                  </div>
                  <div className='support_info'>
                    <p>
                      Any Enquiry: <a href='tel:'>+56985475235</a>
                    </p>
                  </div>
                  <div className='top_right text-right'>
                    <ul>
                      <li>
                        <a href='my-account.html'> My Account </a>
                      </li>
                      <li>
                        <a href='checkout.html'> Checkout </a>
                      </li>
                    </ul>
                  </div>
                  <div className='search_container'>
                    <form action='#'>
                      <div className='search_box'>
                        <input placeholder='Search product...' type='text' />
                        <button type='submit'>Search</button>
                      </div>
                    </form>
                  </div>
                  <div className='middel_right_info'>
                    <div className='header_wishlist'>
                      <a href='wishlist.html'>
                        <img src='assets/img/user.png' alt='' />
                      </a>
                    </div>
                    <div className='mini_cart_wrapper'>
                      <a href='javascript:void(0)'>
                        <img src='assets/img/shopping-bag.png' alt='' />
                      </a>
                      <span className='cart_quantity'>2</span>
                      <div className='mini_cart'>
                        <div className='cart_item'>
                          <div className='cart_img'>
                            <a href='#'>
                              <img
                                src='assets/img/s-product/product.jpg'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='cart_info'>
                            <a href='#'>Sit voluptatem rhoncus sem lectus</a>
                            <p>
                              Qty: 1 X <span> $60.00 </span>
                            </p>
                          </div>
                          <div className='cart_remove'>
                            <a href='#'>
                              <i className='ion-android-close' />
                            </a>
                          </div>
                        </div>
                        <div className='cart_item'>
                          <div className='cart_img'>
                            <a href='#'>
                              <img
                                src='assets/img/s-product/product2.jpg'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='cart_info'>
                            <a href='#'>Natus erro at congue massa commodo</a>
                            <p>
                              Qty: 1 X <span> $60.00 </span>
                            </p>
                          </div>
                          <div className='cart_remove'>
                            <a href='#'>
                              <i className='ion-android-close' />
                            </a>
                          </div>
                        </div>
                        <div className='mini_cart_table'>
                          <div className='cart_total'>
                            <span>Sub total:</span>
                            <span className='price'>$138.00</span>
                          </div>
                          <div className='cart_total mt-10'>
                            <span>total:</span>
                            <span className='price'>$138.00</span>
                          </div>
                        </div>
                        <div className='mini_cart_footer'>
                          <div className='cart_button'>
                            <a href='cart.html'>View cart</a>
                          </div>
                          <div className='cart_button'>
                            <a href='checkout.html'>Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='menu' className='text-left '>
                    <ul className='offcanvas_main_menu'>
                      <li className='menu-item-has-children active'>
                        <a href='#'>Home</a>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='product-details.html'>product</a>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>pages </a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li>
                            <a href='contact.html'>contact</a>
                          </li>
                          <li>
                            <a href='privacy-policy.html'>privacy policy</a>
                          </li>
                          <li>
                            <a href='faq.html'>Frequently Questions</a>
                          </li>
                          <li>
                            <a href='login.html'>login</a>
                          </li>
                          <li>
                            <a href='register.html'>register</a>
                          </li>
                          <li>
                            <a href='forget-password.html'>Forget Password</a>
                          </li>
                          <li>
                            <a href='404.html'>Error 404</a>
                          </li>
                          <li>
                            <a href='cart.html'>cart</a>
                          </li>
                          <li>
                            <a href='tracking.html'>tracking</a>
                          </li>
                          <li>
                            <a href='checkout.html'>checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>blog</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='blog.html'>blog</a>
                          </li>
                          <li>
                            <a href='blog-details.html'>blog details</a>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='login.html'>my account</a>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='contact.html'> Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className='Offcanvas_footer'>
                    <span>
                      <a href='#'>
                        <i className='fa fa-envelope-o' /> info@drophunt.com
                      </a>
                    </span>
                    <ul>
                      <li className='facebook'>
                        <a href='#'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li className='twitter'>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                      </li>
                      <li className='pinterest'>
                        <a href='#'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                      </li>
                      <li className='google-plus'>
                        <a href='#'>
                          <i className='fa fa-google-plus' />
                        </a>
                      </li>
                      <li className='linkedin'>
                        <a href='#'>
                          <i className='fa fa-linkedin' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*Offcanvas menu area end*/}
        <Header />
        {/*header area end*/}
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
                    <li>blog details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumbs area end*/}
        {/*blog body area start*/}
        <div className='blog_details mt-60'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-9 col-md-12'>
                {/*blog grid area start*/}
                <div className='blog_wrapper'>
                  <article className='single_blog'>
                    <figure>
                      <div className='post_header'>
                        <h3 className='post_title'>
                          Best drone experience ever
                        </h3>
                        <div className='blog_meta'>
                          <span className='author'>
                            Posted by : <a href='#'>Rahul</a> /{" "}
                          </span>
                          <span className='post_date'>
                            <a href='#'>Sep 20, 2019</a>
                          </span>
                        </div>
                      </div>
                      <div className='blog_thumb'>
                        <a href='#'>
                          <img src='assets/img/blog/blog-details.jpg' alt='' />
                        </a>
                      </div>
                      <figcaption className='blog_content'>
                        <div className='post_content'>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem
                          </p>
                          <blockquote>
                            <p>
                              Quisque semper nunc vitae erat pellentesque, ac
                              placerat arcu consectetur. In venenatis elit ac
                              ultrices convallis. Duis est nisi, tincidunt ac
                              urna sed, cursus blandit lectus. In ullamcorper
                              sit amet ligula ut eleifend. Proin dictum tempor
                              ligula, ac feugiat metus. Sed finibus tortor eu
                              scelerisque scelerisque.
                            </p>
                          </blockquote>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true
                            generator on the Internet. It uses a dictionary
                          </p>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum
                          </p>
                        </div>
                        <div className='entry_content'>
                          <div className='post_meta'>
                            <span>Tags: </span>
                            <span>
                              <a href='#'>Drone, </a>
                            </span>
                            <span>
                              <a href='#'>Sky, </a>
                            </span>
                            <span>
                              <a href='#'>Fly</a>
                            </span>
                          </div>
                          <div className='social_sharing'>
                            <p>share this post:</p>
                            <ul>
                              <li>
                                <a href='#' title='facebook'>
                                  <i className='fa fa-facebook' />
                                </a>
                              </li>
                              <li>
                                <a href='#' title='twitter'>
                                  <i className='fa fa-twitter' />
                                </a>
                              </li>
                              <li>
                                <a href='#' title='pinterest'>
                                  <i className='fa fa-pinterest' />
                                </a>
                              </li>
                              <li>
                                <a href='#' title='google+'>
                                  <i className='fa fa-google-plus' />
                                </a>
                              </li>
                              <li>
                                <a href='#' title='linkedin'>
                                  <i className='fa fa-linkedin' />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  <div className='comments_box'>
                    <h3>3 Comments </h3>
                    <div className='comment_list'>
                      <div className='comment_thumb'>
                        <img src='assets/img/blog/comment3.png.jpg' alt='' />
                      </div>
                      <div className='comment_content'>
                        <div className='comment_meta'>
                          <h5>
                            <a href='#'>Admin</a>
                          </h5>
                          <span>October 16, 2018 at 1:38 am</span>
                        </div>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure
                        </p>
                        <div className='comment_reply'>
                          <a href='#'>Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className='comment_list list_two'>
                      <div className='comment_thumb'>
                        <img src='assets/img/blog/comment3.png.jpg' alt='' />
                      </div>
                      <div className='comment_content'>
                        <div className='comment_meta'>
                          <h5>
                            <a href='#'>Demo</a>
                          </h5>
                          <span>October 16, 2018 at 1:38 am</span>
                        </div>
                        <p>
                          Quisque semper nunc vitae erat pellentesque, ac
                          placerat arcu consectetur
                        </p>
                        <div className='comment_reply'>
                          <a href='#'>Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className='comment_list'>
                      <div className='comment_thumb'>
                        <img src='assets/img/blog/comment3.png.jpg' alt='' />
                      </div>
                      <div className='comment_content'>
                        <div className='comment_meta'>
                          <h5>
                            <a href='#'>Admin</a>
                          </h5>
                          <span>October 16, 2018 at 1:38 am</span>
                        </div>
                        <p>
                          Quisque orci nibh, porta vitae sagittis sit amet,
                          vehicula vel mauris. Aenean at
                        </p>
                        <div className='comment_reply'>
                          <a href='#'>Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='comments_form'>
                    <h3>Leave a Reply </h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form action='#'>
                      <div className='row'>
                        <div className='col-12'>
                          <label htmlFor='review_comment'>Comment </label>
                          <textarea
                            name='comment'
                            id='review_comment'
                            defaultValue={""}
                          />
                        </div>
                        <div className='col-lg-4 col-md-4'>
                          <label htmlFor='author'>Name</label>
                          <input id='author' type='text' />
                        </div>
                        <div className='col-lg-4 col-md-4'>
                          <label htmlFor='email'>Email </label>
                          <input id='email' type='text' />
                        </div>
                        <div className='col-lg-4 col-md-4'>
                          <label htmlFor='website'>Website </label>
                          <input id='website' type='text' />
                        </div>
                      </div>
                      <button className='button' type='submit'>
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
                {/*blog grid area start*/}
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
        {/*blog section area end*/}
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
export default BlogDetails;
