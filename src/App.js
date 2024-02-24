
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import StudentLogin from './Components/Student/StudentLogin';
import StudentDashboard from "./Components/Student/StudentDashboard";
import Student from "./Components/Student/Student";

import NotFound from "./Components/NotFound";

import AdminLogin from "./Components/Admin/AdminLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import IT from "./Components/Admin/IT";
import MCA from "./Components/Admin/MCA";
import Electronics from "./Components/Admin/Electronics";
import StreamRanks from "./Components/Admin/StreamRanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/it" element={<IT />} />
        <Route path="/mca" element={<MCA />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/streamRanks" element={<StreamRanks/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
