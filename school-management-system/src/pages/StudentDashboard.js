import React from 'react';

const StudentDashboard = () => {
    return (
        <React.Fragment>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Welcome Bruklin!</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Student Dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-nine w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-book-open" />
                                        </div>
                                        <div className="db-info">
                                            <h3>04/06</h3>
                                            <h6>All Courses</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-six w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-file-alt" />
                                        </div>
                                        <div className="db-info">
                                            <h3>40/60</h3>
                                            <h6>All Projects</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-ten w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-clipboard-list" />
                                        </div>
                                        <div className="db-info">
                                            <h3>30/50</h3>
                                            <h6>Test Attended</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-eleven w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-clipboard-check" />
                                        </div>
                                        <div className="db-info">
                                            <h3>15/20</h3>
                                            <h6>Test Passed</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-9">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <h5 className="card-title">Today’s Lesson</h5>
                                        </div>
                                        <div className="col-6">
                                            <span className="float-right view-link"><a href="#">View All Courses</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dash-circle">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-xl-6 dash-widget3">
                                            <div className="card-body dash-widget1">
                                                <div className="circle-bar circle-bar2">
                                                    <div className="circle-graph2" data-percent={20}>
                                                        <b>20%</b>
                                                    </div>
                                                    <h6>Lesson Learned</h6>
                                                    <h4>10 <span>/ 50</span></h4>
                                                </div>
                                                <div className="dash-details">
                                                    <h4>Facilisi etiam</h4>
                                                    <ul>
                                                        <li><i className="fas fa-clock" /> 2.30pm - 3.30pm</li>
                                                        <li><i className="fas fa-book-open" /> 5 Lessons</li>
                                                        <li><i className="fas fa-hourglass-end" /> 60 Minutes</li>
                                                        <li><i className="fas fa-clipboard-check" /> 5 Asignment</li>
                                                    </ul>
                                                    <div className="dash-btn">
                                                        <button type="submit" className="btn btn-info btn-border">Skip</button>
                                                        <button type="submit" className="btn btn-info">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-6 dash-widget4">
                                            <div className="card-body dash-widget1 dash-widget2">
                                                <div className="circle-bar circle-bar3">
                                                    <div className="circle-graph3" data-percent={50}>
                                                        <b>50%</b>
                                                    </div>
                                                    <h6>Lesson Learned</h6>
                                                    <h4>25 <span>/ 50</span></h4>
                                                </div>
                                                <div className="dash-details">
                                                    <h4>Augue mauris</h4>
                                                    <ul>
                                                        <li><i className="fas fa-clock" /> 3.30pm - 4.30pm</li>
                                                        <li><i className="fas fa-book-open" /> 6 Lessons</li>
                                                        <li><i className="fas fa-hourglass-end" /> 60 Minutes</li>
                                                        <li><i className="fas fa-clipboard-check" /> 6 Asignment</li>
                                                    </ul>
                                                    <div className="dash-btn">
                                                        <button type="submit" className="btn btn-info btn-border">Skip</button>
                                                        <button type="submit" className="btn btn-info">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-12 col-xl-8 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <h5 className="card-title">Learning Activity</h5>
                                                </div>
                                                <div className="col-6">
                                                    <ul className="list-inline-group text-right mb-0 pl-0">
                                                        <li className="list-inline-item">
                                                            <div className="form-group mb-0 amount-spent-select">
                                                                <select className="form-control form-control-sm">
                                                                    <option>Weekly</option>
                                                                    <option>Monthly</option>
                                                                    <option>Yearly</option>
                                                                </select>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div id="apexcharts-area" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 col-xl-4 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <h5 className="card-title">Learning History</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="teaching-card">
                                                <ul className="activity-feed">
                                                    <li className="feed-item">
                                                        <div className="feed-date1">Sep 05, 9 am - 10 am (60min)</div>
                                                        <span className="feed-text1"><a>Lorem ipsum dolor</a></span>
                                                        <p><span>In Progress</span></p>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-date1">Sep 04, 2 pm - 3 pm (70min)</div>
                                                        <span className="feed-text1"><a>Et dolore magna</a></span>
                                                        <p>Completed</p>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-date1">Sep 02, 1 pm - 2 am (80min)</div>
                                                        <span className="feed-text1"><a>Exercitation ullamco</a></span>
                                                        <p><span>In Progress</span></p>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-date1">Aug 30, 10 am - 12 pm (90min)</div>
                                                        <span className="feed-text1"><a>Occaecat cupidatat</a></span>
                                                        <p>Completed</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-xl-3 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-12">
                                            <h5 className="card-title">Calendar</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="calendar-doctor" className="calendar-container" />
                                    <div className="calendar-info calendar-info1">
                                        <div className="calendar-details">
                                            <p>09 am</p>
                                            <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                                                Fermentum <span>09am - 10pm</span></h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>10 am</p>
                                            <h6 className="calendar-violet d-flex justify-content-between align-items-center">
                                                Pharetra et <span>10am - 11am</span></h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>11 am</p>
                                            <h6 className="calendar-red d-flex justify-content-between align-items-center">Break
                                                <span>11am - 11.30am</span></h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>12 pm</p>
                                            <h6 className="calendar-orange d-flex justify-content-between align-items-center">
                                                Massa <span>11.30am - 12.00pm</span></h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>09 am</p>
                                            <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                                                Fermentum <span>09am - 10pm</span></h6>
                                        </div>
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
export default StudentDashboard;