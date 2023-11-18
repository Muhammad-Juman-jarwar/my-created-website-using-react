import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
        <footer className='footer_widgets'>
          <div className='footer_top'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='widgets_container contact_us'>
                    <div className='footer_logo'>
                      <a href='#'>
                        <img src='assets/img/logo/logo.png' alt='' />
                      </a>
                    </div>
                    <div className='footer_contact'>
                      <p>
                        John draw real poor on call my from. May she mrs
                        furnished discourse extremely. Ask doubt noisy shade
                        guest Lose away off why half led have near bed. At
                        engage simple father of period others except
                      </p>
                      <p>
                        Ask doubt noisy shade guest Lose away off why half led
                        have near bed. At engage simple father of period others
                        except
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-md-6 col-sm-6'>
                  <div className='widgets_container widget_menu'>
                    <h3>Information</h3>
                    <div className='footer_menu'>
                      <ul>
                        <li>
                          <a href='about.html'>About Us</a>
                        </li>
                        <li>
                          <a href='blog.html'>Delivery Information</a>
                        </li>
                        <li>
                          <a href='contact.html'>Privacy Policy</a>
                        </li>
                        <li>
                          <a href='services.html'>Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href='#'>Returns</a>
                        </li>
                        <li>
                          <a href='#'>Gift Certificates</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-md-6 col-sm-6'>
                  <div className='widgets_container widget_menu'>
                    <h3>My Account</h3>
                    <div className='footer_menu'>
                      <ul>
                        <li>
                          <a href='#'>My Account</a>
                        </li>
                        <li>
                          <a href='#'>Order History</a>
                        </li>
                        <li>
                          <a href='wishlist.html'>Wish List</a>
                        </li>
                        <li>
                          <a href='#'>Newsletter</a>
                        </li>
                        <li>
                          <a href='#'>Affiliate</a>
                        </li>
                        <li>
                          <a href='faq.html'>International Orders</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='widgets_container newsletter'>
                    <h3>Follow Us</h3>
                    <div className='footer_social_link'>
                      <ul>
                        <li>
                          <a className='facebook' href='#' title='Facebook'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                        <li>
                          <a className='twitter' href='#' title='Twitter'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a className='instagram' href='#' title='instagram'>
                            <i className='fa fa-instagram' />
                          </a>
                        </li>
                        <li>
                          <a className='linkedin' href='#' title='linkedin'>
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li>
                          <a className='rss' href='#' title='rss'>
                            <i className='fa fa-rss' />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='subscribe_form'>
                      <h3>Join Our Newsletter Now</h3>
                      <form id='mc-form' className='mc-form footer-newsletter'>
                        <input
                          id='mc-email'
                          type='email'
                          autoComplete='off'
                          placeholder='Your email address...'
                        />
                        <button id='mc-submit'>Subscribe!</button>
                      </form>
                      {/* mailchimp-alerts Start */}
                      <div className='mailchimp-alerts text-centre'>
                        <div className='mailchimp-submitting' />
                        {/* mailchimp-submitting end */}
                        <div className='mailchimp-success' />
                        {/* mailchimp-success end */}
                        <div className='mailchimp-error' />
                        {/* mailchimp-error end */}
                      </div>
                      {/* mailchimp-alerts end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_bottom'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6'>
                  <div className='copyright_area'>
                    <p>
                      {" "}
                      <a href='templateshub.net'>Templates Hub</a>
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='footer_payment text-right'>
                    <a href='#'>
                      <img src='assets/img/icon/payment.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </React.Fragment>
  );
};
export default Footer;