import axios from "axios";
import React, { useEffect, useState } from "react";

import AdminDashboard from "./AdminDashboard";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";

const IT = () => {
  const [data, changeData] = useState({ data: [] });
  const navigate=useNavigate()
 useEffect(() => {
   if (
     sessionStorage.getItem("adminID") == null ||
     sessionStorage.getItem("adminID") === ""
   ) {
     navigate("/adminLogin");
     console.log(sessionStorage.getItem("adminID"));
   }
 });
  const fetchData = () => {
    axios
      .post(process.env.REACT_APP_BASEURL + "/viewStudent", { stream: "IT" })
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <AdminHeader/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1>IT</h1>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Student ID</th>
                      <th scope="col">Stream</th>
                      <th scope="col">Area of Interest</th>
                      <th scope="col">Registered in placement portal</th>
                      <th scope="col"> placement ID</th>
                      <th scope="col">Attended any interview</th>
                      <th scope="col">Received any job offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.map((value, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.studentID}</td>
                          <td>{value.stream}</td>
                          <td>{value.areaOfInterest}</td>
                          <td>{value.registeredInPlacementPortal}</td>
                          <td>{value.placementID}</td>
                          <td>{value.attendedInterviews}</td>
                          <td>{value.receivedJobOffers}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <AdminDashboard/>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default IT;
