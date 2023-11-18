import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register = () => {
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
                    <li>Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumbs area end*/}
        <section className='account'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div
                  className='account-contents'
                  style={{
                    background: 'url("assets/img/about/about1.jpg")',
                    backgroundSize: "cover",
                  }}
                >
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='account-thumb'>
                        <h2>Register now</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis consectetur similique deleniti pariatur
                          enim cumque eum
                        </p>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                      <div className='account-content'>
                        <form action='#'>
                          <div className='single-acc-field'>
                            <label htmlFor='name'>Name</label>
                            <input
                              type='text'
                              id='name'
                              placeholder='Enter Your Name'
                            />
                          </div>
                          <div className='single-acc-field'>
                            <label htmlFor='email'>Email</label>
                            <input
                              type='email'
                              id='email'
                              placeholder='Enter your Email'
                            />
                          </div>
                          <div className='single-acc-field'>
                            <label htmlFor='password'>Password</label>
                            <input
                              type='password'
                              id='password'
                              placeholder='At least 6 Charecter'
                            />
                          </div>
                          <div className='single-acc-field boxes'>
                            <input type='checkbox' id='checkbox' />
                            <label htmlFor='checkbox'>I'm not a robot</label>
                          </div>
                          <div className='single-acc-field'>
                            <button type='submit'>Register now</button>
                          </div>
                          <a href='login.html'>Already account? Login</a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
export default Register;