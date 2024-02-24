import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios"; // Import Axios for making HTTP requests
import StreamRanks from "./StreamRanks";

const AdminDashboard = () => {
  const chartRefs = useRef([]);
  const [totalScore, setTotalScore] = useState(0);
  const [streamRank, setStreamRank] = useState(0);
  const [studentData, setStudentData] = useState(null); // State to store student data

  useEffect(() => {
    // Fetch student data from backend
    async function fetchStudentData() {
      try {
        const response = await axios.post("/viewStudent"); // Assuming your backend server is running on the same domain
        if (response.data.status === "success") {
          setStudentData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    }

    fetchStudentData();
  }, []); // Run only once when component mounts

  useEffect(() => {
    const data1 = {
      labels: ["90 & above", "60 - 90%", "30 - 60%", "10 - 30%", "Below 10%"],
      datasets: [
        {
          label: "Percentage of Students Registered",
          data: [1000, 750, 500, 250, 0],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const data2 = {
      labels: ["90 & above", "60 - 90%", "30 - 60%", "10 - 30%", "Below 10%"],
      datasets: [
        {
          label: "Percentage of Students Participated in Interviews",
          data: [1000, 750, 500, 250, 0],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const data3 = {
      labels: ["90 & above", "60 - 90%", "30 - 60%", "10 - 30%", "Below 10%"],
      datasets: [
        {
          label: "Number of Students as per Interest Area",
          data: [1500, 1000, 750, 500, 250],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const data4 = {
      labels: ["90 & above", "60 - 90%", "30 - 60%", "10 - 30%", "Below 10%"],
      datasets: [
        {
          label: "Percentage of Students Received Offer Letter",
          data: [1500, 1000, 750, 500, 250],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const scoreData = [1000, 750, 500, 250, 0];

    const total = scoreData.reduce((acc, score) => acc + score, 0);
    setTotalScore(total);

    const rank = scoreData.filter((score) => score > total).length + 1;
    setStreamRank(rank);

    chartRefs.current.forEach((chartRef) => {
      if (chartRef.chart) {
        chartRef.chart.destroy();
      }
    });

    const ctx1 = document.getElementById("chart1").getContext("2d");
    const ctx2 = document.getElementById("chart2").getContext("2d");
    const ctx3 = document.getElementById("chart3").getContext("2d");
    const ctx4 = document.getElementById("chart4").getContext("2d");

    const chart1 = new Chart(ctx1, {
      type: "bar",
      data: data1,
      options: options,
    });

    const chart2 = new Chart(ctx2, {
      type: "bar",
      data: data2,
      options: options,
    });

    const chart3 = new Chart(ctx3, {
      type: "line",
      data: data3,
      options: options,
    });

    const chart4 = new Chart(ctx4, {
      type: "bar",
      data: data4,
      options: options,
    });

    chartRefs.current = [
      { id: "chart1", chart: chart1 },
      { id: "chart2", chart: chart2 },
      { id: "chart3", chart: chart3 },
      { id: "chart4", chart: chart4 },
    ];
  }, [totalScore, streamRank]);

  return (
    <>
      <div className="container">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <canvas id="chart1"></canvas>
              <p>
                Percentage of students registered on the career placement portal
              </p>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <canvas id="chart2"></canvas>
              <p>Percentage of students who participated in Interviews</p>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <canvas id="chart3"></canvas>
              <p>Number of students as per the interest area</p>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <canvas id="chart4"></canvas>
              <p>Percentage of students who received offer letter</p>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <StreamRanks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
