import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    stream: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://54.173.32.19:4000/adminLogin",
        data
      );
      const responseData = response.data;
      const { email, password, stream } = responseData.data; // Extract data from response
      // Check if email, password, and stream match expected values
      if (
        email === data.email &&
        password === data.password &&
        stream === data.stream
      ) {
        // Redirect to specific page based on the stream
        switch (stream) {
          case "IT":
            navigate("/it");
            break;
          case "MCA":
            navigate("/mca");
            break;
          case "Electronics":
            navigate("/electronics");
            break;
          // case "Computer Science":
          //   navigate("/cybersecurity");
          //   break;
          
          default:
            break;
        }
      } else {
        // Display alert and reload the page
        alert("Incorrect data entered. Please try again.");
        window.location.reload();
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      // Display alert and reload the page
      alert("Incorrect data entered. Please try again.");
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                id="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                id="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stream" className="form-label">
                Stream
                <span className="text-danger">*</span>
              </label>
              <select
                id="stream"
                name="stream"
                value={data.stream}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select an option...</option>
                <option value="IT">IT</option>
                <option value="MCA">MCA</option>
                <option value="ELECTRONICS">ELECTRONICS</option>
                {/* <option value="COMPUTER SCIENCE">COMPUTER SCINCE</option> */}
               
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
