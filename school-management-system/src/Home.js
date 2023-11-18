import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Home = () => {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <a href="index.html" className="logo">
              <img src="assets/img/logo.png" alt="Logo" />
            </a>
            <a href="index.html" className="logo logo-small">
              <img
                src="assets/img/logo-small.png"
                alt="Logo"
                width="30"
                height="30"
              />
            </a>
          </div>
          <a href="javascript:void(0);" id="toggle_btn">
            <i className="fas fa-align-left"></i>
          </a>
          <div className="top-nav-search">
            <form>
              <input type="text" className="form-control" placeholder="Search here" />
              <button className="btn" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <a className="mobile_btn" id="mobile_btn">
            <i className="fas fa-bars"></i>
          </a>
          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="far fa-bell"></i>
                <span className="badge badge-pill">3</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carlson Tech</span> has
                              approved
                              <span className="noti-title">your estimate</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">4 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-11.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title"
                              >International Software Inc</span
                              >
                              has sent you a invoice in the amount of
                              <span className="noti-title">$218</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">6 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-17.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">John Hendry</span> sent a
                              cancellation request
                              <span className="noti-title">Apple iPhone XR</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">8 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-13.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Mercury Software Inc</span>
                              added a new product
                              <span className="noti-title">Apple MacBook Pro</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">12 mins ago</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <span className="user-img"
                ><img
                    className="rounded-circle"
                    src="assets/img/profiles/avatar-01.jpg"
                    width="31"
                    alt="Ryan Taylor"
                  /></span>
              </a>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <a className="dropdown-item" href="profile.html">My Profile</a>
                <a className="dropdown-item" href="inbox.html">Inbox</a>
                <a className="dropdown-item" href="login.html">Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="sidebar" id="sidebar">
          <Scrollbars>
            <div className="sidebar-inner">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  <li className="menu-title">
                    <span>Main Menu</span>
                  </li>
                  <li className="submenu active">
                    <a href="#"
                    ><i className="fas fa-user-graduate"></i> <span> Dashboard</span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li>
                        <a href="index.html" className="active">Admin Dashboard</a>
                      </li>
                      <li>
                        <a href="teacher-dashboard.html">Teacher Dashboard</a>
                      </li>
                      <li>
                        <a href="student-dashboard.html">Student Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-user-graduate"></i> <span> Students</span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="students.html">Student List</a></li>
                      <li><a href="student-details.html">Student View</a></li>
                      <li><a href="add-student.html">Student Add</a></li>
                      <li><a href="edit-student.html">Student Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-chalkboard-teacher"></i>
                      <span> Teachers</span> <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="teachers.html">Teacher List</a></li>
                      <li><a href="teacher-details.html">Teacher View</a></li>
                      <li><a href="add-teacher.html">Teacher Add</a></li>
                      <li><a href="edit-teacher.html">Teacher Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-building"></i> <span> Departments</span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="departments.html">Department List</a></li>
                      <li><a href="add-department.html">Department Add</a></li>
                      <li><a href="edit-department.html">Department Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-book-reader"></i> <span> Subjects</span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="subjects.html">Subject List</a></li>
                      <li><a href="add-subject.html">Subject Add</a></li>
                      <li><a href="edit-subject.html">Subject Edit</a></li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Management</span>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-file-invoice-dollar"></i>
                      <span> Accounts</span> <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="fees-collections.html">Fees Collection</a></li>
                      <li><a href="expenses.html">Expenses</a></li>
                      <li><a href="salary.html">Salary</a></li>
                      <li><a href="add-fees-collection.html">Add Fees</a></li>
                      <li><a href="add-expenses.html">Add Expenses</a></li>
                      <li><a href="add-salary.html">Add Salary</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="holiday.html"
                    ><i className="fas fa-holly-berry"></i> <span>Holiday</span></a
                    >
                  </li>
                  <li>
                    <a href="fees.html"
                    ><i className="fas fa-comment-dollar"></i> <span>Fees</span></a
                    >
                  </li>
                  <li>
                    <a href="exam.html"
                    ><i className="fas fa-clipboard-list"></i>
                      <span>Exam list</span></a
                    >
                  </li>
                  <li>
                    <a href="event.html"
                    ><i className="fas fa-calendar-day"></i> <span>Events</span></a
                    >
                  </li>
                  <li>
                    <a href="time-table.html"
                    ><i className="fas fa-table"></i> <span>Time Table</span></a
                    >
                  </li>
                  <li>
                    <a href="library.html"
                    ><i className="fas fa-book"></i> <span>Library</span></a
                    >
                  </li>
                  <li className="menu-title">
                    <span>Pages</span>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-shield-alt"></i>
                      <span> Authentication </span> <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                      <li><a href="forgot-password.html">Forgot Password</a></li>
                      <li><a href="error-404.html">Error Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blank-page.html"
                    ><i className="fas fa-file"></i> <span>Blank Page</span></a
                    >
                  </li>
                  <li className="menu-title">
                    <span>Others</span>
                  </li>
                  <li>
                    <a href="sports.html"
                    ><i className="fas fa-baseball-ball"></i> <span>Sports</span></a
                    >
                  </li>
                  <li>
                    <a href="hostel.html"
                    ><i className="fas fa-hotel"></i> <span>Hostel</span></a
                    >
                  </li>
                  <li>
                    <a href="transport.html"
                    ><i className="fas fa-bus"></i> <span>Transport</span></a
                    >
                  </li>
                  <li className="menu-title">
                    <span>UI Interface</span>
                  </li>
                  <li>
                    <a href="components.html"
                    ><i className="fas fa-vector-square"></i>
                      <span>Components</span></a
                    >
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-columns"></i> <span> Forms </span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                      <li><a href="form-input-groups.html">Input Groups </a></li>
                      <li><a href="form-horizontal.html">Horizontal Form </a></li>
                      <li><a href="form-vertical.html"> Vertical Form </a></li>
                      <li><a href="form-mask.html"> Form Mask </a></li>
                      <li><a href="form-validation.html"> Form Validation </a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"
                    ><i className="fas fa-table"></i> <span> Tables </span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li><a href="tables-basic.html">Basic Tables </a></li>
                      <li><a href="data-tables.html">Data Table </a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);"
                    ><i className="fas fa-code"></i> <span>Multi Level</span>
                      <span className="menu-arrow"></span
                      ></a>
                    <ul>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          <span>Level 1</span> <span className="menu-arrow"></span
                          ></a>
                        <ul>
                          <li>
                            <a href="javascript:void(0);"><span>Level 2</span></a>
                          </li>
                          <li className="submenu">
                            <a href="javascript:void(0);">
                              <span> Level 2</span> <span className="menu-arrow"></span
                              ></a>
                            <ul>
                              <li><a href="javascript:void(0);">Level 3</a></li>
                              <li><a href="javascript:void(0);">Level 3</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0);"> <span>Level 2</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);"> <span>Level 1</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Scrollbars>
        </div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-one w-100">
                  <div className="card-body">
                    <div
                      className="db-widgets d-flex justify-content-between align-items-center"
                    >
                      <div className="db-icon">
                        <i className="fas fa-user-graduate"></i>
                      </div>
                      <div className="db-info">
                        <h3>50055</h3>
                        <h6>Students</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-two w-100">
                  <div className="card-body">
                    <div
                      className="db-widgets d-flex justify-content-between align-items-center"
                    >
                      <div className="db-icon">
                        <i className="fas fa-crown"></i>
                      </div>
                      <div className="db-info">
                        <h3>50+</h3>
                        <h6>Awards</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-three w-100">
                  <div className="card-body">
                    <div
                      className="db-widgets d-flex justify-content-between align-items-center"
                    >
                      <div className="db-icon">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="db-info">
                        <h3>30+</h3>
                        <h6>Department</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-four w-100">
                  <div className="card-body">
                    <div
                      className="db-widgets d-flex justify-content-between align-items-center"
                    >
                      <div className="db-icon">
                        <i className="fas fa-file-invoice-dollar"></i>
                      </div>
                      <div className="db-info">
                        <h3>$505</h3>
                        <h6>Revenue</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Revenue</h5>
                      </div>
                      <div className="col-6">
                        <ul className="list-inline-group text-right mb-0 pl-0">
                          <li className="list-inline-item">
                            <div className="form-group mb-0 amount-spent-select">
                              <select className="form-control form-control-sm">
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Number of Students</h5>
                      </div>
                      <div className="col-6">
                        <ul className="list-inline-group text-right mb-0 pl-0">
                          <li className="list-inline-item">
                            <div className="form-group mb-0 amount-spent-select">
                              <select className="form-control form-control-sm">
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="bar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title">Star Students</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center">
                        <thead className="thead-light">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="text-center">Marks</th>
                            <th className="text-center">Percentage</th>
                            <th className="text-right">Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2209</div>
                            </td>
                            <td className="text-nowrap">John Smith</td>
                            <td className="text-center">1185</td>
                            <td className="text-center">98%</td>
                            <td className="text-right">
                              <div>2019</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE1245</div>
                            </td>
                            <td className="text-nowrap">Jolie Hoskins</td>
                            <td className="text-center">1195</td>
                            <td className="text-center">99.5%</td>
                            <td className="text-right">
                              <div>2018</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE1625</div>
                            </td>
                            <td className="text-nowrap">Pennington Joy</td>
                            <td className="text-center">1196</td>
                            <td className="text-center">99.6%</td>
                            <td className="text-right">
                              <div>2017</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2516</div>
                            </td>
                            <td className="text-nowrap">Millie Marsden</td>
                            <td className="text-center">1187</td>
                            <td className="text-center">98.2%</td>
                            <td className="text-right">
                              <div>2016</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2209</div>
                            </td>
                            <td className="text-nowrap">John Smith</td>
                            <td className="text-center">1185</td>
                            <td className="text-center">98%</td>
                            <td className="text-right">
                              <div>2015</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title">Student Activity</h5>
                  </div>
                  <div className="card-body">
                    <ul className="activity-feed">
                      <li className="feed-item">
                        <div className="feed-date">Apr 13</div>
                        <span className="feed-text"
                        ><a>John Doe</a> won 1st place in <a>"Chess"</a></span
                        >
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Mar 21</div>
                        <span className="feed-text"
                        ><a>Justin Lee</a> participated in
                          <a href="invoice.html">"Carrom"</a></span
                        >
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Feb 2</div>
                        <span className="feed-text"
                        ><a>Justin Lee</a>attended internation conference in
                          <a href="profile.html">"St.John School"</a></span
                        >
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Apr 13</div>
                        <span className="feed-text"
                        ><a>John Doe</a> won 1st place in <a>"Chess"</a></span
                        >
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Mar 21</div>
                        <span className="feed-text"
                        ><a>Justin Lee</a> participated in
                          <a href="invoice.html">"Carrom"</a></span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill fb sm-box">
                  <i className="fab fa-facebook"></i>
                  <h6>50,095</h6>
                  <p>Likes</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill twitter sm-box">
                  <i className="fab fa-twitter"></i>
                  <h6>48,596</h6>
                  <p>Follows</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill insta sm-box">
                  <i className="fab fa-instagram"></i>
                  <h6>52,085</h6>
                  <p>Follows</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill linkedin sm-box">
                  <i className="fab fa-linkedin-in"></i>
                  <h6>69,050</h6>
                  <p>Follows</p>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>Copyright © 2020 Dreamguys.</p>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;