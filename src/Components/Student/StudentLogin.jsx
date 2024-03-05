import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";



const StudentLogin = () => {
  const [data, changeData] = useState({
    email: "",
    password: "",
  });

   const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const readValue = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Email validation
    if (!data.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // Password validation
    if (!data.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const submitValue = () => {
    console.log(process.env.REACT_APP_BASEURL);
    if (validateForm()) {
      axios
        .post(process.env.REACT_APP_BASEURL + "/studentLogin", data)
        .then((response) => {
          if (response.data.data.length === 0) {
            alert("Email or password incorrect");
          } else {
            let studentID = response.data.data._id;

            console.log(studentID);
            let studentName = response.data.data.name;
            let studentEmail = response.data.data.email;
            let studentStream = response.data.data.stream;
            let studentIDNo = response.data.data.studentID;
            let studentPhoto= response.data.data.studentPhoto;//photo

            sessionStorage.setItem("studName", studentName);
            sessionStorage.setItem("studEmail", studentEmail);
            sessionStorage.setItem("studStream", studentStream);
            sessionStorage.setItem("studIDNo", studentIDNo);
            sessionStorage.setItem("studID", studentID);
            sessionStorage.setItem("studPhoto", studentPhoto);//photo

            alert("Login successful");
            navigate("/student");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error.message);
          alert("Email or password incorrect");
        })
        
    }
    
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
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
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
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
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
      <Footer />
    </>
  );
};

export default StudentLogin;







