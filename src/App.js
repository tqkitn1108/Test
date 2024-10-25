import React from "react";
import Navbar from "./customer/navbar/Navbar.jsx";
import Header from "./customer/header/Header.jsx";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header showTitle={true} />
    </div>
  );
}
