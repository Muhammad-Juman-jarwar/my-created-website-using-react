import React from 'react';

const Student = () => {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Students</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">Students</li>
                </ul>
              </div>
              <div className="col-auto text-right float-right ml-auto">
                <a href="#" className="btn btn-outline-primary mr-2"><i className="fas fa-download" /> Download</a>
                <a href="add-student.html" className="btn btn-primary"><i className="fas fa-plus" /></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0 datatable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th>DOB</th>
                          <th>Parent Name</th>
                          <th>Mobile Number</th>
                          <th>Address</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PRE2209</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-01.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Aaliyah</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>2 Feb 2002</td>
                          <td>Jeffrey Wong</td>
                          <td>097 3584 5870</td>
                          <td>911 Deer Ridge Drive,USA</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2213</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Malynne</a>
                            </h2>
                          </td>
                          <td>8 A</td>
                          <td>3 June 2010</td>
                          <td>Fields Malynne</td>
                          <td>242 362 3100</td>
                          <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2143</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-02.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Levell Scott</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>12 Apr 2002</td>
                          <td>Jeffrey Scott</td>
                          <td>026 7318 4366</td>
                          <td>P.O. Box: 41, Gaborone</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2431</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Minnie</a>
                            </h2>
                          </td>
                          <td>11 C</td>
                          <td>24 Feb 2000</td>
                          <td>J Shaffer</td>
                          <td>952 512 4909</td>
                          <td>4771 Oral Lake Road, Golden Valley</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1534</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Lois A</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>22 Jul 2006</td>
                          <td>Cleary Wong</td>
                          <td>413 289 1314</td>
                          <td>2844 Leverton Cove Road, Palmer</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2153</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-05.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Calvin</a>
                            </h2>
                          </td>
                          <td>9 B</td>
                          <td>8 Dec 2003</td>
                          <td>Minnie J Shaffer</td>
                          <td>701 753 3810</td>
                          <td>1900 Hidden Meadow Drive, Crete</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1252</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-06.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Joe Kelley</a>
                            </h2>
                          </td>
                          <td>11 C</td>
                          <td>7 Oct 2000</td>
                          <td>Vincent Howard</td>
                          <td>402 221 7523</td>
                          <td>3979 Ashwood Drive, Omaha</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1434</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-07.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Vincent</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>4 Jan 2002</td>
                          <td>Kelley Joe</td>
                          <td>402 221 7523</td>
                          <td>3979 Ashwood Drive, Omaha</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2345</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-08.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Kozma  Tatari</a>
                            </h2>
                          </td>
                          <td>9 A</td>
                          <td>1 Feb 2006</td>
                          <td>Lombardi</td>
                          <td>04 2239 968</td>
                          <td>Rruga E Kavajes, Condor Center, Tirana</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2365</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-09.jpg" alt="User Image" /></a>
                              <a href="student-details.html">John Chambers</a>
                            </h2>
                          </td>
                          <td>11 B</td>
                          <td>13 Sept 2003</td>
                          <td>Wong Jeffrey</td>
                          <td>870 663 2334</td>
                          <td>4667 Sunset Drive, Pine Bluff</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1234</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="student-details.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-10.jpg" alt="User Image" /></a>
                              <a href="student-details.html">Nathan Humphries</a>
                            </h2>
                          </td>
                          <td>10 B</td>
                          <td>26 Apr 1994</td>
                          <td>Stephen Marley</td>
                          <td>077 3499 9959</td>
                          <td>86 Lamphey Road, Thelnetham</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <i className="fas fa-pen" />
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fas fa-trash" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
    );
    </React.Fragment>
  );
};
export default Student;