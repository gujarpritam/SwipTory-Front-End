import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Register />
      <Login />
    </div>
  );
}

export default HomePage;
