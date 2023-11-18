import React from 'react';

const TeacherDashboard = () => {
    return (
        <React.Fragment>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Welcome Jonathan!</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item active">Teacher Dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-five w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-chalkboard" />
                                        </div>
                                        <div className="db-info">
                                            <h3>04/06</h3>
                                            <h6>Total Classes</h6>
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
                                            <i className="fas fa-user-graduate" />
                                        </div>
                                        <div className="db-info">
                                            <h3>40/60</h3>
                                            <h6>Total Students</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-seven w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-book-open" />
                                        </div>
                                        <div className="db-info">
                                            <h3>30/50</h3>
                                            <h6>Total Lessons</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                            <div className="card bg-eight w-100">
                                <div className="card-body">
                                    <div className="db-widgets d-flex justify-content-between align-items-center">
                                        <div className="db-icon">
                                            <i className="fas fa-clock" />
                                        </div>
                                        <div className="db-info">
                                            <h3>15/20</h3>
                                            <h6>Total Hours</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-9">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xl-8 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <h5 className="card-title">Upcoming Lesson</h5>
                                                </div>
                                                <div className="col-6">
                                                    <span className="float-right view-link"><a href="#">View All Courses</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-3 pb-3">
                                            <div className="table-responsive lesson">
                                                <table className="table table-center">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="date">
                                                                    <b>Aug 4, Tuesday</b>
                                                                    <p>2.30pm - 3.30pm (60min)</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="date">
                                                                    <b>Lessons 30</b>
                                                                    <p>3.1 Ipsuum dolor</p>
                                                                </div>
                                                            </td>
                                                            <td><a href="#">Confirmed</a></td>
                                                            <td>
                                                                <button type="submit" className="btn btn-info">
                                                                    Reschedule
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="date">
                                                                    <b>Aug 5, Wednesday</b>
                                                                    <p>3.00pm - 4.30pm (90min)</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="date">
                                                                    <b>Lessons 31</b>
                                                                    <p>3.2 Ipsuum dolor</p>
                                                                </div>
                                                            </td>
                                                            <td><a href="#">Confirmed</a></td>
                                                            <td>
                                                                <button type="submit" className="btn btn-info">
                                                                    Reschedule
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="date">
                                                                    <b>Aug 6, Thursday</b>
                                                                    <p>11.00am - 12.00pm (20min)</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="date">
                                                                    <b>Lessons 32</b>
                                                                    <p>3.3 Ipsuum dolor</p>
                                                                </div>
                                                            </td>
                                                            <td><a href="#">Confirmed</a></td>
                                                            <td>
                                                                <button type="submit" className="btn btn-info">
                                                                    Reschedule
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-xl-4 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col-12">
                                                    <h5 className="card-title">Semester Progress</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dash-widget">
                                            <div className="circle-bar circle-bar1">
                                                <div className="circle-graph1" data-percent={50}>
                                                    <b>50%</b>
                                                </div>
                                            </div>
                                            <div className="dash-info">
                                                <h6>Lesson Progressed</h6>
                                                <h4>30 <span>/ 60</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 col-xl-8 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <h5 className="card-title">Teaching Activity</h5>
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
                                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <h5 className="card-title">Teaching History</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="teaching-card">
                                                <ul className="activity-feed">
                                                    <li className="feed-item">
                                                        <div className="feed-date1">
                                                            Sep 05, 9 am - 10 am (60min)
                                                        </div>
                                                        <span className="feed-text1"><a>Lorem ipsum dolor</a></span>
                                                        <p><span>In Progress</span></p>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-date1">
                                                            Sep 04, 2 pm - 3 pm (70min)
                                                        </div>
                                                        <span className="feed-text1"><a>Et dolore magna</a></span>
                                                        <p>Completed</p>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-date1">
                                                            Sep 02, 1 pm - 2 am (80min)
                                                        </div>
                                                        <span className="feed-text1"><a>Exercitation ullamco</a></span>
                                                        <p>Completed</p>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-date1">
                                                            Aug 30, 10 am - 12 pm (90min)
                                                        </div>
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
                                                Fermentum <span>09am - 10pm</span>
                                            </h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>10 am</p>
                                            <h6 className="calendar-violet d-flex justify-content-between align-items-center">
                                                Pharetra et <span>10am - 11am</span>
                                            </h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>11 am</p>
                                            <h6 className="calendar-red d-flex justify-content-between align-items-center">
                                                Break <span>11am - 11.30am</span>
                                            </h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>12 pm</p>
                                            <h6 className="calendar-orange d-flex justify-content-between align-items-center">
                                                Massa <span>11.30am - 12.00pm</span>
                                            </h6>
                                        </div>
                                        <div className="calendar-details">
                                            <p>09 am</p>
                                            <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                                                Fermentum <span>09am - 10pm</span>
                                            </h6>
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
export default TeacherDashboard;