import React from 'react';
class Navbar extends React.Component {

    render() { 
        return (
          <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Student name</span><span className="text-black-50">edogaru@daiict.ac.in</span><span> </span></div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Welcome, Student full name</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" defaultValue /></div>
                  <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue placeholder="surname" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">Student ID</label><input type="text" className="form-control" placeholder="enter phone number" defaultValue /></div>
                  <div className="col-md-12"><label className="labels">Alternate Email Address</label><input type="text" className="form-control" placeholder="enter email id" defaultValue /></div>
                  <div className="col-md-12"><label className="labels">Skype ID</label><input type="text" className="form-control" placeholder="enter skype ID" defaultValue /></div>
                  <div className="col-md-12"><label className="labels">Date Of Birth</label><input type="text" className="form-control" placeholder="enter DOB" defaultValue /></div>
                  <div className="col-md-12"><label className="labels">Gender</label><input type="text" className="form-control" placeholder="enter Gender" defaultValue /></div>
                  <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter Mobile Number" defaultValue /></div>
                  <div className="col-md-12"><label className="labels">Alternate Mobile Number</label><input type="text" className="form-control" placeholder="enter Mobile Number" defaultValue /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><label className="labels">Father Name</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                  <div className="col-md-6"><label className="labels">Mother Name</label><input type="text" className="form-control" defaultValue placeholder="" /></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Download resume</button></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Your profile is APPROVED</h4>
                </div>
                <div className="col-md-12"><label className="labels">Permanent Address</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Current Address</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                <div className="col-md-12"><label className="labels">10th Percentage</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                <div className="col-md-12"><label className="labels">12th Percentage</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                <div className="col-md-12"><label className="labels">CPI</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Domain</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Registering For</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
              
                <div className="row mt-3">
                  <div className="col-md-6"><label className="labels">Interested in Placement</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                  <div className="col-md-6"><label className="labels">Out of Placement Drive</label><input type="text" className="form-control" defaultValue placeholder="" /></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6"><label className="labels">Current BackLogs</label><input type="text" className="form-control" placeholder="" defaultValue /></div>
                  <div className="col-md-6"><label className="labels">Total BackLogs</label><input type="text" className="form-control" defaultValue placeholder="" /></div>
                </div>

              </div>
            </div>
          </div>
        </div>
        );
    }
}
 
export default Navbar;