import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CheckOut = () => {
  return (
    <React.Fragment>
      <div>
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
                    <li>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumbs area end*/}
        {/*Checkout page section*/}
        <div className='Checkout_section mt-60'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='user-actions'>
                  <h3>
                    <i className='fa fa-file-o' aria-hidden='true' />
                    Returning customer?
                    <a
                      className='Returning'
                      href='#'
                      data-toggle='collapse'
                      data-target='#checkout_login'
                      aria-expanded='true'
                      aria-controls='checkout_login'
                    >
                      Click here to login
                    </a>
                  </h3>
                  <div
                    id='checkout_login'
                    className='collapse'
                    data-parent='#accordionExample'
                  >
                    <div className='checkout_info'>
                      <p>
                        If you have shopped with us before, please enter your
                        details in the boxes below. If you are a new customer
                        please proceed to the Billing &amp; Shipping section.
                      </p>
                      <form action='#'>
                        <div className='form_group'>
                          <label>
                            Username or email <span>*</span>
                          </label>
                          <input type='text' />
                        </div>
                        <div className='form_group'>
                          <label>
                            Password <span>*</span>
                          </label>
                          <input type='text' />
                        </div>
                        <div className='form_group group_3 '>
                          <button type='submit'>Login</button>
                          <label htmlFor='remember_box'>
                            <input id='remember_box' type='checkbox' />
                            <span> Remember me </span>
                          </label>
                        </div>
                        <a href='#'>Lost your password?</a>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='user-actions'>
                  <h3>
                    <i className='fa fa-file-o' aria-hidden='true' />
                    Get any promo code?
                    <a
                      className='Returning'
                      href='#'
                      data-toggle='collapse'
                      data-target='#checkout_coupon'
                      aria-expanded='true'
                      aria-controls='checkout_coupon'
                    >
                      Click here to enter your code
                    </a>
                  </h3>
                  <div
                    id='checkout_coupon'
                    className='collapse'
                    data-parent='#accordionExample'
                  >
                    <div className='checkout_info'>
                      <form action='#'>
                        <input placeholder='Coupon code' type='text' />
                        <button type='submit'>Apply coupon</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='checkout_form'>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <form action='#'>
                    <h3>Billing Details</h3>
                    <div className='row'>
                      <div className='col-lg-6 mb-20'>
                        <label>
                          First Name <span>*</span>
                        </label>
                        <input type='text' />
                      </div>
                      <div className='col-lg-6 mb-20'>
                        <label>
                          Last Name <span>*</span>
                        </label>
                        <input type='text' />
                      </div>
                      <div className='col-12 mb-20'>
                        <label>Company Name</label>
                        <input type='text' />
                      </div>
                      <div className='col-12 mb-20'>
                        <label htmlFor='country'>
                          country <span>*</span>
                        </label>
                        <select
                          className='niceselect_option'
                          name='cuntry'
                          id='country'
                        >
                          <option value={2}>bangladesh</option>
                          <option value={3}>Algeria</option>
                          <option value={4}>Afghanistan</option>
                          <option value={5}>Ghana</option>
                          <option value={6}>Albania</option>
                          <option value={7}>Bahrain</option>
                          <option value={8}>Colombia</option>
                          <option value={9}>Dominican Republic</option>
                        </select>
                      </div>
                      <div className='col-12 mb-20'>
                        <label>
                          Street address <span>*</span>
                        </label>
                        <input
                          placeholder='House number and street name'
                          type='text'
                        />
                      </div>
                      <div className='col-12 mb-20'>
                        <input
                          placeholder='Apartment, suite, unit etc. (optional)'
                          type='text'
                        />
                      </div>
                      <div className='col-12 mb-20'>
                        <label>
                          Town / City <span>*</span>
                        </label>
                        <input type='text' />
                      </div>
                      <div className='col-12 mb-20'>
                        <label>
                          State / County <span>*</span>
                        </label>
                        <input type='text' />
                      </div>
                      <div className='col-lg-6 mb-20'>
                        <label>
                          Phone<span>*</span>
                        </label>
                        <input type='text' />
                      </div>
                      <div className='col-lg-6 mb-20'>
                        <label>
                          {" "}
                          Email Address <span>*</span>
                        </label>
                        <input type='text' />
                      </div>
                      <div className='col-12 mb-20'>
                        <input
                          id='account'
                          type='checkbox'
                          data-target='createp_account'
                        />
                        <label
                          htmlFor='account'
                          data-toggle='collapse'
                          data-target='#collapseOne'
                          aria-controls='collapseOne'
                        >
                          Create an account?
                        </label>
                        <div
                          id='collapseOne'
                          className='collapse'
                          data-parent='#accordionExample'
                        >
                          <div className='card-body1'>
                            <label>
                              {" "}
                              Account password <span>*</span>
                            </label>
                            <input placeholder='password' type='password' />
                          </div>
                        </div>
                      </div>
                      <div
                        className='col-12 mb-20 accordion'
                        id='accordionExample'
                      >
                        <input
                          id='address'
                          type='checkbox'
                          data-target='createp_account'
                        />
                        <label
                          className='righ_0'
                          htmlFor='address'
                          data-toggle='collapse'
                          data-target='#collapseTwo'
                          aria-controls='collapseTwo'
                        >
                          Ship to a different address?
                        </label>
                        <div
                          id='collapseTwo'
                          className='collapse'
                          data-parent='#accordionExample'
                        >
                          <div className='row'>
                            <div className='col-lg-6 mb-20'>
                              <label>
                                First Name <span>*</span>
                              </label>
                              <input type='text' />
                            </div>
                            <div className='col-lg-6 mb-20'>
                              <label>
                                Last Name <span>*</span>
                              </label>
                              <input type='text' />
                            </div>
                            <div className='col-12 mb-20'>
                              <label>Company Name</label>
                              <input type='text' />
                            </div>
                            <div className='col-12 mb-20'>
                              <div className='select_form_select'>
                                <label htmlFor='countru_name'>
                                  country <span>*</span>
                                </label>
                                <select
                                  className='niceselect_option'
                                  name='cuntry'
                                  id='countru_name'
                                >
                                  <option value={2}>bangladesh</option>
                                  <option value={3}>Algeria</option>
                                  <option value={4}>Afghanistan</option>
                                  <option value={5}>Ghana</option>
                                  <option value={6}>Albania</option>
                                  <option value={7}>Bahrain</option>
                                  <option value={8}>Colombia</option>
                                  <option value={9}>Dominican Republic</option>
                                </select>
                              </div>
                            </div>
                            <div className='col-12 mb-20'>
                              <label>
                                Street address <span>*</span>
                              </label>
                              <input
                                placeholder='House number and street name'
                                type='text'
                              />
                            </div>
                            <div className='col-12 mb-20'>
                              <input
                                placeholder='Apartment, suite, unit etc. (optional)'
                                type='text'
                              />
                            </div>
                            <div className='col-12 mb-20'>
                              <label>
                                Town / City <span>*</span>
                              </label>
                              <input type='text' />
                            </div>
                            <div className='col-12 mb-20'>
                              <label>
                                State / County <span>*</span>
                              </label>
                              <input type='text' />
                            </div>
                            <div className='col-lg-6 mb-20'>
                              <label>
                                Phone<span>*</span>
                              </label>
                              <input type='text' />
                            </div>
                            <div className='col-lg-6'>
                              <label>
                                {" "}
                                Email Address <span>*</span>
                              </label>
                              <input type='text' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='order-notes'>
                          <label htmlFor='order_note'>Order Notes</label>
                          <textarea
                            id='order_note'
                            rows={2}
                            placeholder='Notes about your order, e.g. special notes for delivery.'
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <form action='#'>
                    <h3>Your order</h3>
                    <div className='order_table table-responsive'>
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {" "}
                              Handbag fringilla <strong> × 2</strong>
                            </td>
                            <td> $165.00</td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              Handbag justo <strong> × 2</strong>
                            </td>
                            <td> $50.00</td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              Handbag elit <strong> × 2</strong>
                            </td>
                            <td> $50.00</td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              Handbag Rutrum <strong> × 1</strong>
                            </td>
                            <td> $50.00</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Cart Subtotal</th>
                            <td>$215.00</td>
                          </tr>
                          <tr>
                            <th>Shipping</th>
                            <td>
                              <strong>$5.00</strong>
                            </td>
                          </tr>
                          <tr className='order_total'>
                            <th>Order Total</th>
                            <td>
                              <strong>$220.00</strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className='payment_method'>
                      <div className='panel-default'>
                        <input
                          id='payment'
                          name='check_method'
                          type='radio'
                          data-target='createp_account'
                        />
                        <label
                          htmlFor='payment'
                          data-toggle='collapse'
                          data-target='#collapseThree'
                          aria-controls='collapseThree'
                        >
                          Direct bank transfer
                        </label>
                        <div
                          id='collapseThree'
                          className='collapse'
                          data-parent='#accordionExample'
                        >
                          <div className='card-body1'>
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='panel-default'>
                        <input
                          id='payment_defult'
                          name='check_method'
                          type='radio'
                          data-target='createp_account'
                        />
                        <label
                          htmlFor='payment_defult'
                          data-toggle='collapse'
                          data-target='#collapseFour'
                          aria-controls='collapseFour'
                        >
                          PayPal <img src='assets/img/icon/papyel.png' alt='' />
                        </label>
                        <div
                          id='collapseFour'
                          className='collapse'
                          data-parent='#accordionExample'
                        >
                          <div className='card-body1'>
                            <p>
                              Pay via PayPal; you can pay with your credit card
                              if you don’t have a PayPal.{" "}
                              <a href='#'>What is Paypal?</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='order_button'>
                        <button type='submit'>Proceed to buy</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Checkout page section end*/}
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
export default CheckOut;
