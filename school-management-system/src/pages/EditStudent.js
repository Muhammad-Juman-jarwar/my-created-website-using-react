import React from 'react';

const EditStudent = () => {
    return (
        <React.Fragment>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3 className="page-title">Edit Students</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="students.html">Students</a></li>
                                    <li className="breadcrumb-item active">Edit Students</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <h5 className="form-title"><span>Student Information</span></h5>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" className="form-control" defaultValue="Nathan Humphries" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control" defaultValue="Stephen Marley" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Student Id</label>
                                                    <input type="text" className="form-control" defaultValue="PRE1234" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Gender</label>
                                                    <select className="form-control">
                                                        <option>Female</option>
                                                        <option>Select Gender</option>
                                                        <option>Male</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Date of Birth</label>
                                                    <div>
                                                        <input type="text" className="form-control" defaultValue="26 Apr 1994" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Class</label>
                                                    <input type="text" className="form-control" defaultValue={10} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Religion</label>
                                                    <input type="text" className="form-control" defaultValue="Religion" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Joining Date</label>
                                                    <div>
                                                        <input type="text" className="form-control" defaultValue="4 Jan 2002" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Mobile Number</label>
                                                    <input type="text" className="form-control" defaultValue="077 3499 9959" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Admission Number</label>
                                                    <input type="text" className="form-control" defaultValue="PRE1252" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Section</label>
                                                    <input type="text" className="form-control" defaultValue="B" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Student Image</label>
                                                    <input type="file" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <h5 className="form-title"><span>Parent Information</span></h5>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Father's Name</label>
                                                    <input type="text" className="form-control" defaultValue="Stephen Marley" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Father's Occupation</label>
                                                    <input type="text" className="form-control" defaultValue="Technician" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Father's Mobile</label>
                                                    <input type="text" className="form-control" defaultValue="	402 221 7523" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Father's Email</label>
                                                    <input type="email" className="form-control" defaultValue="stephenmarley@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Mother's Name</label>
                                                    <input type="text" className="form-control" defaultValue="Cleary Wong" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Mother's Occupation</label>
                                                    <input type="text" className="form-control" defaultValue="Home Maker" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Mother's Mobile</label>
                                                    <input type="text" className="form-control" defaultValue="026 7318 4366" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Mother's Email</label>
                                                    <input type="email" className="form-control" defaultValue="clearywong@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Present Address</label>
                                                    <textarea className="form-control" defaultValue={"86 Lamphey Road, Thelnetham"} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <label>Permanent Address</label>
                                                    <textarea className="form-control" defaultValue={"86 Lamphey Road, Thelnetham"} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default EditStudent;