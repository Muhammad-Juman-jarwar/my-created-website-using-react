import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, Outlet } from 'react-router-dom';

const SideBar = () => {
    return (
        <React.Fragment>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <DropdownButton id="dropdown-item-button" title="Dropdown button">
                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>
                            <ul>
                                <li className="menu-title">
                                    <span>Main Menu</span>
                                </li>
                                <ul className="submenu">
                                    <Link to="/"><i className="fas fa-user-graduate" /> <span> Dashboard</span> <span className="menu-arrow" /></Link>
                                    <ul className='dropdown-menu'>
                                        <li><Link to="/admindashboard" >Admin Dashboard</Link></li>
                                        <li><Link to="/teacherdashboard">Teacher Dashboard</Link></li>
                                        <li><Link to="/studentdashboard">Student Dashboard</Link></li>
                                    </ul>
                                </ul>
                                <li className="submenu">
                                    <Link to="/student"><i className="fas fa-user-graduate" /> <span> Students</span> <span className="menu-arrow" /></Link>
                                    <ul>
                                        <li><Link to="/studentlist">Student List</Link></li>
                                        <li><Link to="/studentsss">Student View</Link></li>
                                        <li><Link to="/studentsgg">Student Add</Link></li>
                                        <li><Link to="/studentsfs">Student Edit</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link Link to="teacher"><i className="fas fa-chalkboard-teacher" /> <span> Teachers</span> <span className="menu-arrow" /></Link>
                                    <ul>
                                        <li><Link to="teachersdfs">Teacher List</Link></li>
                                        <li><Link to="teachersfds">Teacher View</Link></li>
                                        <li><Link to="add-teactml">Teacher Add</Link></li>
                                        <li><Link to="edit-teahtml">Teacher Edit</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fas fa-building" /> <span> Departments</span> <span className="menu-arrow" /></a>
                                    <ul>
                                        <li><a href="departments.html">Department List</a></li>
                                        <li><a href="add-department.html">Department Add</a></li>
                                        <li><a href="edit-department.html">Department Edit</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fas fa-book-reader" /> <span> Subjects</span> <span className="menu-arrow" /></a>
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
                                    <a href="#"><i className="fas fa-file-invoice-dollar" /> <span> Accounts</span> <span className="menu-arrow" /></a>
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
                                    <a href="holiday.html"><i className="fas fa-holly-berry" /> <span>Holiday</span></a>
                                </li>
                                <li>
                                    <a href="fees.html"><i className="fas fa-comment-dollar" /> <span>Fees</span></a>
                                </li>
                                <li>
                                    <a href="exam.html"><i className="fas fa-clipboard-list" /> <span>Exam list</span></a>
                                </li>
                                <li>
                                    <a href="event.html"><i className="fas fa-calendar-day" /> <span>Events</span></a>
                                </li>
                                <li>
                                    <a href="time-table.html"><i className="fas fa-table" /> <span>Time Table</span></a>
                                </li>
                                <li>
                                    <a href="library.html"><i className="fas fa-book" /> <span>Library</span></a>
                                </li>
                                <li className="menu-title">
                                    <span>Pages</span>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fas fa-shield-alt" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                                    <ul>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                        <li><a href="error-404.html">Error Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blank-page.html"><i className="fas fa-file" /> <span>Blank Page</span></a>
                                </li>
                                <li className="menu-title">
                                    <span>Others</span>
                                </li>
                                <li>
                                    <a href="sports.html"><i className="fas fa-baseball-ball" /> <span>Sports</span></a>
                                </li>
                                <li>
                                    <a href="hostel.html"><i className="fas fa-hotel" /> <span>Hostel</span></a>
                                </li>
                                <li>
                                    <a href="transport.html"><i className="fas fa-bus" /> <span>Transport</span></a>
                                </li>
                                <li className="menu-title">
                                    <span>UI Interface</span>
                                </li>
                                <li>
                                    <a href="components.html"><i className="fas fa-vector-square" /> <span>Components</span></a>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fas fa-columns" /> <span> Forms </span> <span className="menu-arrow" /></a>
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
                                    <a href="#"><i className="fas fa-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
                                    <ul>
                                        <li><a href="tables-basic.html">Basic Tables </a></li>
                                        <li><a href="data-tables.html">Data Table </a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="fas fa-code" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"> <span>Level 1</span> <span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"> <span> Level 2</span> <span className="menu-arrow" /></a>
                                                    <ul>
                                                        <li><a href="javascript:void(0);">Level 3</a></li>
                                                        <li><a href="javascript:void(0);">Level 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
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
            </div>
            <Outlet />
        </React.Fragment>
    );
};
export default SideBar;