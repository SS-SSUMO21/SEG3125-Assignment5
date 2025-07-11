import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          {}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer
        className="footer bg-dark text-white d-flex justify-content-center align-items-center"
        style={{ height: "48px" }}
      >
        <Container className="text-center m-0 p-0">
          Rayhan Karim & Samarventhan Surendran
        </Container>
      </footer>
    </>
  );
}

export default App;
