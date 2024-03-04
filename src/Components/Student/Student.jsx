import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Student = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem("studID") == null ||
      sessionStorage.getItem("studID") === ""
    ) {
      navigate("/studentLogin");
      console.log(sessionStorage.getItem("studID"));
    }
  });

  const [data, changeData] = useState({
    email: sessionStorage.getItem("studEmail"),
    name: sessionStorage.getItem("studName"),
    studentID: sessionStorage.getItem("studIDNo"),
    stream: sessionStorage.getItem("studStream"),
    registeredInPlacementPortal: "No",
    placementID: "",
    attendedInterviews: "No",
    areaOfInterest: "",
    receivedJobOffers: "No",
    jobOfferDocument: null, // Add field to store the job offer document
    photo: null, // Add photo field to store the selected file
  });

  const readValue = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    changeData({ ...data, [e.target.name]: value });
  };

  // // Handle file selection
  // const handleFileSelect = (e) => {
  //   changeData({ ...data, photo: e.target.files[0] });
  // };

  // Handle file selection
  const handleFileSelect = (e) => {
    changeData({ ...data, [e.target.name]: e.target.files[0] });
  };

  const submitValue = () => {
    // Check if areaOfInterest is not empty before submitting
    if (data.areaOfInterest.trim() === "") {
      alert("Please choose your area of interest.");
      return;
    }

      // If the student is registered in the placement portal, validate Placement ID
  if (data.registeredInPlacementPortal === "Yes" && data.placementID.trim() === "") {
    alert("Please enter your Placement ID.");
    return;
  }

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("studentID", data.studentID);
    formData.append("stream", data.stream);
    formData.append(
      "registeredInPlacementPortal",
      data.registeredInPlacementPortal
    );
    formData.append("placementID", data.placementID);
    formData.append("attendedInterviews", data.attendedInterviews);
    formData.append("areaOfInterest", data.areaOfInterest);
    formData.append("receivedJobOffers", data.receivedJobOffers);
    formData.append("photo", data.photo); // Append the selected file
    if (data.receivedJobOffers === "Yes") {
      formData.append("jobOfferDocument", data.jobOfferDocument); // Append job offer document if received
    }

    axios
      .post(process.env.REACT_APP_BASEURL + "/addStudent", formData)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Successfully added");
          // Redirect to studentDashboard
          navigate("/studentDashboard");
        } else {
          alert("Error....");
        }
      });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id=""
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Student ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="studentID"
                  value={data.studentID}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Stream
                </label>
                <select
                  className="form-control"
                  name="stream"
                  value={data.stream}
                  onChange={readValue}
                >
                  <option value="">Select Stream</option>
                  <option value="IT">IT</option>
                  <option value="Electronics">Electronics</option>
                  <option value="MCA">MCA</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  onChange={handleFileSelect} // Handle file selection
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Registered in Placement Portal?
                </label>
                <select
                  className="form-control"
                  name="registeredInPlacementPortal"
                  value={data.registeredInPlacementPortal}
                  onChange={readValue}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
                {/* Placement ID */}
                {data.registeredInPlacementPortal === "Yes" && (
                  <div className="mt-3">
                    <label htmlFor="" className="form-label">
                      Placement ID <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="placementID"
                      value={data.placementID}
                      onChange={readValue}
                    />
                  </div>
                )}
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Attended Any Interview?
                </label>
                <select
                  className="form-control"
                  name="attendedInterviews"
                  value={data.attendedInterviews}
                  onChange={readValue}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Area of Interest <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  className="form-control"
                  name="areaOfInterest"
                  value={data.areaOfInterest}
                  onChange={readValue}
                  required // Make the field required
                >
                  <option value="">Select Area of Interest</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Data Annotation">Data Annotation</option>
                  <option value="User Experience">User Experience</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Research">Research</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Received Any Job Offers?
                </label>
                <select
                  className="form-control"
                  name="receivedJobOffers"
                  value={data.receivedJobOffers}
                  onChange={readValue}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
                {/* jod offer upload */}
                {data.receivedJobOffers === "Yes" && (
                  <div className="mt-3">
                    <label htmlFor="" className="form-label">
                      Job Offer Document (PDF){" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="jobOfferDocument"
                      onChange={handleFileSelect}
                    />
                  </div>
                )}
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-primary" onClick={submitValue}>
                  Submit
                </button>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-primary" onClick={refreshPage}>
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student;
