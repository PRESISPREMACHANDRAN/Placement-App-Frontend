import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#E6E6FA",
    color: "#000", // Set text color to black for better visibility
  };

  return (
    <header style={headerStyle} className="py-4">
      <div className="container d-flex align-items-center">
        <h1 className="h4 mb-0">Placement Portal</h1>
      </div>
    </header>
  );
};

export default Header;
