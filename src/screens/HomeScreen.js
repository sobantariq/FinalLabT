import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <h1>PSL SCHEDULES</h1>
    </div>
  );
}

export default HomeScreen;
