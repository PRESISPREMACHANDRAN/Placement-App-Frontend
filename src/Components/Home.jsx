import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <Header/>
      <div
        className="background-color"
        style={{
          backgroundColor: "#f0f0f0", // Light gray color
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-sm-6">
              <Link to="/studentLogin">
                <div
                  className="shadow p-4 mb-5 rounded text-center"
                  style={{ backgroundColor: "#FFC0CB", cursor: "pointer" }}
                >
                  <h1>Are you a student?</h1>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/adminLogin">
                <div
                  className="shadow p-4 mb-5 rounded text-center"
                  style={{ backgroundColor: "#ADD8E6", cursor: "pointer" }}
                >
                  <h1>Are you a Placement Officer?</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
