import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <div>
        <div className='error_section'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='error_form'>
                  <img src='assets/img/404.jpg' alt='' />
                  <h2>Opps! PAGE NOT BE FOUND</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random{" "}
                    <br /> text. It has roots in a piece of classical
                  </p>
                  <a href='index-2.html'>Back to home page</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NotFound;
