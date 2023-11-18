import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  

  return (
    <React.Fragment>
              <header>
          <div className='main_header'>
            {/*header top start*/}
            <div className='header_top'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='support_info'>
                      <p>
                        Email: <a href='mailto:'>support@drophunt.com</a>
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='top_right text-right'>
                      <ul>
                        <li>
                          <Link to='/account'>Account</Link>
                        </li>
                        <li>
                          <Link to='/checkout'>Checkout</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*header top start*/}
            {/*header middel start*/}
            <div className='header_middle'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-3 col-md-6'>
                    <div className='logo'>
                      <Link to='/'>
                        <img src='assets/img/logo/logo.png' alt='' />
                      </Link>
                    </div>
                  </div>
                  <div className='col-lg-9 col-md-6'>
                    <div className='middel_right'>
                      <div className='search_container'>
                        <form action='#'>
                          <div className='search_box'>
                            <input
                              placeholder='Search product...'
                              type='text'
                            />
                            <button type='submit'>Search</button>
                          </div>
                        </form>
                      </div>
                      <div className='middel_right_info'>
                        <div className='header_wishlist'>
                          <a href='#'>
                            <img src='assets/img/user.png' alt='' />
                          </a>
                        </div>
                        <div className='mini_cart_wrapper'>
                          <a href='#'>
                            <img src='assets/img/shopping-bag.png' alt='' />
                          </a>
                          <span className='cart_quantity'>2</span>
                          {/*mini cart*/}
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
                                <a href='#'>
                                  Sit voluptatem rhoncus sem lectus
                                </a>
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
                                <a href='#'>
                                  Natus erro at congue massa commodo
                                </a>
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
                                <Link to='/cart'>View cart</Link>
                              </div>
                              <div className='cart_button'>
                                <Link to='/checkout'>Checkout</Link>
                              </div>
                            </div>
                          </div>
                          {/*mini cart end*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*header middel end*/}
            {/*header bottom satrt*/}
            <div className='main_menu_area'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='main_menu menu_position'>
                      <nav>
                        <ul>
                          <li>
                            <NavLink to='/'>home</NavLink>
                          </li>
                          <li>
                            <NavLink to='/product'>Product</NavLink>
                          </li>
                          <li>
                            <NavLink to='/about'>
                              pages <i className='fa fa-angle-down' />
                            </NavLink>
                            <ul className='sub_menu pages'>
                              <li>
                                <Link to='/about'>About Us</Link>
                              </li>
                              <li>
                                <Link to='/contact'>contact</Link>
                              </li>
                              <li>
                                <Link to='/privacypolicy'>privacy policy</Link>
                              </li>
                              <li>
                                <Link to='/faq'>Frequently Questions</Link>
                              </li>
                              <li>
                                <Link to='/login'>login</Link>
                              </li>
                              <li>
                                <Link to='/register'>register</Link>
                              </li>
                              <li>
                                <Link to='/forgotpassword'>
                                  Forget Password
                                </Link>
                              </li>
                              <li>
                                <Link to='/cart'>cart</Link>
                              </li>
                              <li>
                                <Link to='/tracking'>tracking</Link>
                              </li>
                              <li>
                                <Link to='/checkout'>checkout</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to='/blog'>
                              blog
                              <i className='fa fa-angle-down' />
                            </NavLink>
                            <ul className='sub_menu pages'>
                              <li>
                                <Link to='/blog'>blog</Link>
                              </li>
                              <li>
                                <Link to='/blogdetails'>blog details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to='/contact'> Contact Us</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*header bottom end*/}
          </div>
        </header>
    </React.Fragment>
  );
};
export default Header;