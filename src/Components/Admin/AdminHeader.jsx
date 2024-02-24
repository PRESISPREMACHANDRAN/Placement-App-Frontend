import React from "react";
import { Link } from "react-router-dom"; 

const AdminHeader = () => {
  const headerStyle = {
    backgroundColor: "#E6E6FA",
    color: "#000",
  };

  const logoutHandler = () => {
    // Perform logout actions here, such as clearing session/local storage or sending logout request to server
    // For now, let's assume it clears session storage
    sessionStorage.clear(); // Clearing session storage
  };

  return (
    <header style={headerStyle} className="py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Placement Portal</h1>
        <Link to="/" onClick={logoutHandler}>
          Logout
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
