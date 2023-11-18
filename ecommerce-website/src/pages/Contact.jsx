import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {

  const [state, setState] = useState();

  const SubmitFormHandler = () => {
    console.log(state);

  }

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
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='account'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-12'>
                <div
                  className='account-contents'
                  style={{
                    background: 'url("assets/img/about/about2.jpg")',
                    backgroundSize: "cover",
                  }}
                >
                  <div className='row'>
                    <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12'>
                      <div className='account-thumb'>
                        <h2>Contact us</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis consectetur similique deleniti pariatur
                          enim cumque eum
                        </p>
                      </div>
                    </div>
                    <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                      <div className='account-content'>
                        <form onSubmit={(e) => e.preventDefault()}>
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='single-acc-field'>
                                <label htmlFor='name'>Name</label>
                                <input
                                  required
                                  value={state}
                                  type='text'
                                  placeholder='Name'
                                  id='name'
                                />
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='single-acc-field'>
                                <label htmlFor='email'>Email</label>
                                <input
                                  required
                                  value={state}
                                  type='email'
                                  placeholder='Email'
                                  id='email'
                                />
                              </div>
                            </div>
                            <div className='col-lg-12'>
                              <div className='single-acc-field'>
                                <label htmlFor='msg'>Message</label>
                                <textarea
                                  required
                                  value={state}
                                  name='msg'
                                  id='msg'
                                  rows={4}
                                  // defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='single-acc-field boxes'>
                            <input type='checkbox' id='checkbox' />
                            <label htmlFor='checkbox'>Remember me</label>
                          </div>
                          <div className='single-acc-field'>
                            <button onClick={SubmitFormHandler} type='submit' >Send Message</button>
                          </div>
                          {/* {<p>Your Message has been sent Successfully</p>} */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Contact;
