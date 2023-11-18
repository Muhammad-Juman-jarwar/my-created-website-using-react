import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Tracking = () => {
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
                    <li>Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumbs area end*/}
        {/*Tracking product start*/}
        <div className='tracking-product mt-60 mb-60'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-8 text-center'>
                <h2>Your Tracking Number</h2>
                <form action='#'>
                  <input
                    type='text'
                    placeholder='Eg:#0.325FHJU658745EGU'
                    required
                  />
                  <button type='submit'>
                    <i className='fa fa-binoculars' /> Track now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*Tracking product end*/}
        {/*Tracking product start*/}
        <div className='feature-area  mt-60'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                <div className='single-feature-2 bottom-after'>
                  <i className='fa fa-bullhorn' />
                  <h4>Seller Shipped Your order</h4>
                  <p>
                    Certainty listening no no behaviour existence assurance
                    situation is. Because add why
                  </p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                <div className='single-feature-2 bottom-before'>
                  <div className='animation'>
                    <i className='fa fa-paper-plane' />
                  </div>
                  <h4>Depert from original Country</h4>
                  <p>
                    Certainty listening no no behaviour existence assurance
                    situation is. Because add why
                  </p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                <div className='single-feature-2 bottom-after disabled'>
                  <i className='fa fa-plane' />
                  <h4>Arrived at destination country</h4>
                  <p>
                    Certainty listening no no behaviour existence assurance
                    situation is. Because add why
                  </p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                <div className='single-feature-2 disabled'>
                  <i className='fa fa-gift' />
                  <h4>Product Delivered</h4>
                  <p>
                    Certainty listening no no behaviour existence assurance
                    situation is. Because add why
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Tracking product end*/}
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
export default Tracking;
