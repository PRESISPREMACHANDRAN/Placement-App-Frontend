// Footer.js
import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024  Placement App</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px 0",
  position: "fixed",
  bottom: 0,
  width: "100%",
};

export default Footer;
