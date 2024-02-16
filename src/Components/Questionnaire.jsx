import React from 'react'

const Questionnaire = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {/* student details */}
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="studentID" className="form-label">
                  Student ID <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="studentID"
                  className="form-control"
                  placeholder="Enter your student ID"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="stream" className="form-label">
                  Stream <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="stream"
                  className="form-control"
                  placeholder="Enter your academic stream"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="photo" className="form-label">
                  Photo <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  id="photo"
                  className="form-control"
                  placeholder="Upload your photo"
                  accept=".jpg, .jpeg .png"
                />
              </div>

              {/* Registration */}
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">
                      Have you registered in the campus placement portal ?
                      <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label>
                      <input
                        type="radio"
                        name="registered"
                        id="registeredNo"
                        value="No"
                        checked
                        required
                      />
                      No
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="registered"
                        id="registeredYes"
                        value="Yes"
                        required
                      />
                      Yes
                    </label>
                  </div>
                </div>

                {/* if yes */}
              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="attended" className="form-label">
                      Have you attended any interview ?
                    </label>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label>
                      <input
                        type="radio"
                        name="attended"
                        id="attendedNo"
                        value="No"
                        checked
                      />
                      No
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="attended"
                        id="attendedYes"
                        value="Yes"
                      />
                      Yes
                    </label>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="areaOfInterest" className="form-label">
                  Choose your area of Interest
                  <span className="text-danger">*</span>
                </label>
                <select id="areaOfInterest" className="form-select">
                  <option value="">Select an option...</option>
                  <option value="Data analytics">Data analytics</option>
                  <option value="Data Annotation">Data Annotation</option>
                  <option value="User Experience">User Experience</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Research">Research</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="received" className="form-label">
                      Have you received any job offers ?
                      <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label>
                      <input
                        type="radio"
                        name="received"
                        id="receivedNo"
                        value="No"
                        checked
                        required
                      />
                      No
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="received"
                        id="receivedYes"
                        value="Yes"
                        required
                      />
                      Yes
                    </label>
                  </div>
                </div>

                {/* if yes */}
              </div>

              {/* submit and Refresh button */}
              
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success">Submit</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success">Refresh</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questionnaire