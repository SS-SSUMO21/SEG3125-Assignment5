import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import WhatWeRepair from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="position-relative">
        <img
          src="/images/computer_board.jpg"
          className="rounded-4 w-100 border border-dark-subtle shadow-lg"
          alt="computer_board"
        />
        <div
          className="position-absolute bottom-0 start-0 text-white m-5 p-3 display-4 rounded-4 shadow-lg fw-bold"
          style={{ backgroundColor: "#1b2f36", left: "20%" }}
        >
          Professional Tech Repair
        </div>
        <p className="text-white small position-absolute bottom-0 ms-5 ps-3">
          Fast and reliable service for all your tech
        </p>
      </Container>
      <Services />
      <Testimonial />
      <WhatWeRepair />
    </div>
  );
};

export default Home;
