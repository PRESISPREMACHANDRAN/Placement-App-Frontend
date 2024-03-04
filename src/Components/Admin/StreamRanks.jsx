import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StreamRanks = () => {
  const [streamRanks, setStreamRanks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      sessionStorage.getItem("adminID") == null ||
      sessionStorage.getItem("adminID") === ""
    ) {
      navigate("/adminLogin");
      console.log(sessionStorage.getItem("adminID"));
    }
  });

  useEffect(() => {
    fetchStreamRanks();
  }, []);

  const fetchStreamRanks = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASEURL + "/streamRanks"
      );
      setStreamRanks(response.data);
    } catch (error) {
      console.error("Error fetching stream ranks:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h2>Stream Ranks</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Stream</th>
                      <th>Total Score</th>
                      <th>Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {streamRanks.map((stream, index) => (
                      <tr key={index}>
                        <td>{stream.stream}</td>
                        <td>{stream.score}</td>
                        <td>{stream.rank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamRanks;
