import React from "react";
import { Link } from "react-router-dom"; 
import Header from "../Header";
import Footer from "../Footer";

const StudentDashboard = () => {
  <Header/>
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1>Congratulations! All the best for a wonderful career...</h1>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Link to="/" className="btn btn-primary">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
