import React from 'react';

const StudentDetails = () => {
  return (
    <React.Fragment>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Student Details</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="students.html">Student</a>
                    </li>
                    <li className="breadcrumb-item active">Student Details</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-info">
                      <h4>About Me</h4>
                      <div className="media mt-3">
                        <img src="assets/img/user.jpg" className="mr-3" alt="..." />
                        <div className="media-body">
                          <ul>
                            <li>
                              <span className="title-span">Full Name : </span>
                              <span className="info-span">Daisy Parks</span>
                            </li>
                            <li>
                              <span className="title-span">Department : </span>
                              <span className="info-span">Computer Science</span>
                            </li>
                            <li>
                              <span className="title-span">Mobile : </span>
                              <span className="info-span">+91 89657 48512</span>
                            </li>
                            <li>
                              <span className="title-span">Email : </span>
                              <span className="info-span"><a href="https://preschool.dreamguystech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7216131b010b32151f131b1e5c111d1f">[email&nbsp;protected]</a></span>
                            </li>
                            <li>
                              <span className="title-span">Gender : </span>
                              <span className="info-span">Male</span>
                            </li>
                            <li>
                              <span className="title-span">DOB : </span>
                              <span className="info-span">22 Apr 1995</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <p>
                            Hello I am Daisy Parks. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry, simply
                            dummy text of the printing and typesetting industry.
                          </p>
                        </div>
                      </div>
                      <div className="row follow-sec">
                        <div className="col-md-4 mb-3">
                          <div className="blue-box">
                            <h3>2850</h3>
                            <p>Followers</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="blue-box">
                            <h3>2050</h3>
                            <p>Following</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="blue-box">
                            <h3>2950</h3>
                            <p>Friends</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-12">
                          <h5>Permanent Address</h5>
                          <p>480, Estern Avenue, Courtage area, New York</p>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-12">
                          <h5>Present Address</h5>
                          <p>480, Estern Avenue, Courtage area, New York</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="skill-info">
                      <h4>Skills</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry, simply dummy text of the printing
                        and typesetting industry
                      </p>
                      <ul>
                        <li>
                          <label>Lorem Ipsum is simply</label>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                          </div>
                        </li>
                        <li>
                          <label>Lorem Ipsum is simply</label>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={69} aria-valuemin={0} aria-valuemax={100} style={{width: '69%'}} />
                          </div>
                        </li>
                        <li>
                          <label>Lorem Ipsum is simply</label>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{width: '86%'}} />
                          </div>
                        </li>
                        <li>
                          <label>Lorem Ipsum is simply</label>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}} />
                          </div>
                        </li>
                      </ul>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <h5>Education</h5>
                          <p className="mt-3">
                            Secondary Schooling at xyz school of secondary
                            education, Mumbai.
                          </p>
                          <p>
                            Higher Secondary Schooling at xyz school of higher
                            secondary education, Mumbai.
                          </p>
                          <p>
                            Bachelor of Science at Abc College of Art and Science,
                            Chennai.
                          </p>
                          <p>
                            Master of Science at Cdm College of Engineering and
                            Technology, Pune.
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <h5>Certificates</h5>
                          <p className="mt-3">1st Prise in Running Competition.</p>
                          <p>Lorem Ipsum is simply dummy text.</p>
                          <p>
                            Won overall star student in higher secondary
                            education.
                          </p>
                          <p>Lorem Ipsum is simply dummy text.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="skill-info">
                      <h4>Settings</h4>
                      <form>
                        <div className="row mt-3">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>Username</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>Current Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label>New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>Copyright © 2020 Dreamguys.</p>
          </footer>
        </div>
    </React.Fragment>
  );
};
export default StudentDetails;