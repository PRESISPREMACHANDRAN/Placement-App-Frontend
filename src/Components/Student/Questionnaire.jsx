// import React, { useState, useEffect } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import axios from "axios";

// const Questionnaire = () => {
//   const [data, setData] = useState({
//     email: "",
//     name: "",
//     studentID: "",
//     stream: "",
//     photo: null,
//     registeredInPlacementPortal: "No",
//     placementID: "",
//     attendedInterviews: "No",
//     receivedJobOffers: "No",
//     jobOfferDocument: null,
//   });

//   const [showPlacementIDInput, setShowPlacementIDInput] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//     if (name === "registeredInPlacementPortal") {
//       setShowPlacementIDInput(value === "Yes");
//     }
//   };

//   const handlePhotoChange = (e) => {
//     setData({
//       ...data,
//       photo: e.target.files[0],
//     });
//   };

//   const handleFileChange = (e) => {
//     setData({
//       ...data,
//       jobOfferDocument: e.target.files[0],
//     });
//   };

//   const submitForm = async () => {
//     try {
//       const formData = new FormData();
//       Object.entries(data).forEach(([key, value]) => {
//         formData.append(key, value);
//       });
//       await axios.post(
//         "http:// 54.173.32.19 :4000/submitQuestionnaire",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert("Form submitted successfully!");
//       setData({
//         email: "",
//         name: "",
//         studentID: "",
//         stream: "",
//         photo: null,
//         registeredInPlacementPortal: "No",
//         placementID: "",
//         attendedInterviews: "No",
//         receivedJobOffers: "No",
//         jobOfferDocument: null,
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form. Please try again.");
//     }
//   };

//   useEffect(() => {
//     setShowPlacementIDInput(data.registeredInPlacementPortal === "Yes");
//   }, [data.registeredInPlacementPortal]);

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <div className="row g-3">
//           {/* Input fields */}
//           {/* Email */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label htmlFor="email" className="form-label">
//               Email <span className="text-danger">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter your email"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Name */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label htmlFor="name" className="form-label">
//               Name <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="form-control"
//               placeholder="Enter your full name"
//               name="name"
//               value={data.name}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Student ID */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label htmlFor="studentID" className="form-label">
//               Student ID <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               id="studentID"
//               className="form-control"
//               placeholder="Enter your student ID"
//               name="studentID"
//               value={data.studentID}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Stream */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label htmlFor="stream" className="form-label">
//               Stream <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               id="stream"
//               className="form-control"
//               placeholder="Enter your stream"
//               name="stream"
//               value={data.stream}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Other fields... */}
//           {/* Photo */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label htmlFor="photo" className="form-label">
//               Photo <span className="text-danger">*</span>
//             </label>
//             <input
//               type="file"
//               id="photo"
//               className="form-control"
//               accept=".jpg, .jpeg, .png"
//               name="photo"
//               onChange={handlePhotoChange}
//             />
//           </div>
//           {/* Registration Portal */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label className="form-label">
//               Registered in Placement Portal?
//               <span className="text-danger">*</span>
//             </label>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="registeredInPlacementPortal"
//                 id="registeredNo"
//                 value="No"
//                 checked={data.registeredInPlacementPortal === "No"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="registeredNo">
//                 No
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="registeredInPlacementPortal"
//                 id="registeredYes"
//                 value="Yes"
//                 checked={data.registeredInPlacementPortal === "Yes"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="registeredYes">
//                 Yes
//               </label>
//             </div>
//           </div>
//           {/* Placement ID */}
//           {showPlacementIDInput && (
//             <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//               <label htmlFor="placementID" className="form-label">
//                 Placement ID
//               </label>
//               <input
//                 type="text"
//                 id="placementID"
//                 className="form-control"
//                 placeholder="Enter your placement ID"
//                 name="placementID"
//                 value={data.placementID}
//                 onChange={handleChange}
//               />
//             </div>
//           )}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label htmlFor="areaOfInterest" className="form-label">
//               Area of Interest <span className="text-danger">*</span>
//             </label>
//             <select
//               id="areaOfInterest"
//               name="areaOfInterest"
//               value={data.areaOfInterest}
//               onChange={handleChange}
//               className="form-select"
//               multiple
//             >
//               <option value="Data Analytics">Data Analytics</option>
//               <option value="Data Annotation">Data Annotation</option>
//               <option value="User Experience">User Experience</option>
//               <option value="Cybersecurity">Cybersecurity</option>
//               <option value="Research">Research</option>
//             </select>
//           </div>
//           {/* Other fields... */}
//           {/* Interview Attendance */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label className="form-label">Attended Any Interview?</label>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="attendedInterviews"
//                 id="attendedNo"
//                 value="No"
//                 checked={data.attendedInterviews === "No"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="attendedNo">
//                 No
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="attendedInterviews"
//                 id="attendedYes"
//                 value="Yes"
//                 checked={data.attendedInterviews === "Yes"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="attendedYes">
//                 Yes
//               </label>
//             </div>
//           </div>
//           {/* Received Job Offers */}
//           <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//             <label className="form-label">Received Any Job Offers?</label>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="receivedJobOffers"
//                 id="receivedNo"
//                 value="No"
//                 checked={data.receivedJobOffers === "No"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="receivedNo">
//                 No
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="receivedJobOffers"
//                 id="receivedYes"
//                 value="Yes"
//                 checked={data.receivedJobOffers === "Yes"}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="receivedYes">
//                 Yes
//               </label>
//             </div>
//           </div>
//           {/* Other fields... */}
//           {/* Job Offer Document */}
//           {data.receivedJobOffers === "Yes" && (
//             <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
//               <label htmlFor="jobOfferDocument" className="form-label">
//                 Upload Job Offer Document
//               </label>
//               <input
//                 type="file"
//                 id="jobOfferDocument"
//                 className="form-control"
//                 name="jobOfferDocument"
//                 onChange={handleFileChange}
//               />
//             </div>
//           )}
//           {/* Submit and Refresh buttons */}
//           <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//             <button className="btn btn-success" onClick={submitForm}>
//               Submit
//             </button>
//           </div>
//           <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//             <button
//               className="btn btn-success"
//               onClick={() => window.location.reload()}
//             >
//               Refresh
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Questionnaire;
