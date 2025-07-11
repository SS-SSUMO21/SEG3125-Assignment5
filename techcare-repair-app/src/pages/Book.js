import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import AppointmentForm from "../components/AppointmentForm";
import Calendar from "../components/Calendar";
import Navbar from "../components/Navbar-book";

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const formRef = useRef();

  const handleBookClick = () => {
    if (formRef.current && formRef.current.submit) {
      formRef.current.submit();
    }
  };

  return (
    <div>
      <Navbar />
      <Container
        fluid="md"
        className="mt-6 border border-dark-subtle rounded-4 pb-2 shadow-lg"
        style={{
          backgroundColor: "azure",
          maxWidth: "1100px",
          minHeight: "80vh",
          marginBottom: "100px",
        }}
      >
        <h1
          className="text-center display-6 mb-4 p-4 fw-bold"
          id="whatWeRepair"
        >
          Thanks for Choosing TechCare!
        </h1>
        <Row className="d-flex justify-content-center mt-5">
          <Col md={5} className="mb-4">
            <div className="calendar fixed-calendar-height">
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
            {(!formValid || !selectedDate) && (
              <Alert
                key="warning"
                variant="warning"
                className="mt-5 rounded-4 shadow-sm"
              >
                Please select a date and fill out all fields to submit
              </Alert>
            )}
            {formValid && selectedDate && (
              <Button
                variant="dark"
                className="mt-5 rounded-4 bg-dark fw-bold text-white shadow"
                style={{ width: "100%" }}
                onClick={handleBookClick}
              >
                <i className="bi bi-calendar-check"></i>
                &nbsp; Book Appointment for
                {selectedDate ? ` ${selectedDate.toLocaleDateString()}` : ""}
              </Button>
            )}
          </Col>
          <Col md={6}>
            <AppointmentForm
              ref={formRef}
              selectedDate={selectedDate}
              onFormValid={setFormValid}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Book;
