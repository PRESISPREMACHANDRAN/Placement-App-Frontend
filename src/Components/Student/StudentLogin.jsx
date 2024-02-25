import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const StudentLogin = () => {
 
  const [data, changeData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const readValue = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  const submitValue = () => {
    axios
      .post("http://54.173.32.19:4000/studentLogin", data)
      .then((response) => {
        if (response.data.data.length === 0) {
          alert("Email or password incorrect");
        } else {
          alert("Login successful");
          navigate("/student");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error.message);
        alert("Email or password incorrect");
      })
      .finally(() => {
        window.location.reload(); // This will reload the page after closing the alert box
      });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h3>Login</h3>
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={readValue}
                  id="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={readValue}
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={submitValue}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    
    </>
  );
};

export default StudentLogin;
