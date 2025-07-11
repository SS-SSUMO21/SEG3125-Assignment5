import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonial = () => (
  <Container
    className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
    style={{ backgroundColor: "aliceblue" }}
    id="theBest"
  >
    <h1 className="m-3 display-6 fw-bold">
      The best tech repair service on the planet 🌎
    </h1>
    <p className="text-start ms-3 mt-4 me-5 pe-4 fs-4">
      At TechCare Repair Services, we don’t just fix computers, we bring them
      back to life. Our certified technicians combine years of experience with
      top-notch customer service, fast turnaround times, and affordable prices.
      We treat every device like it’s our own and every customer, like family.
      When you choose us, you're choosing reliability, trust, and results that
      last.
    </p>
    <p className="text-start ms-3 mt-2 me-5 pe-4 display-6 fs-2">
      Don't believe us? Just hear what one of our customer's has to say!
    </p>
    <Row className="d-flex justify-content-center">
      <Col md={10}>
        <Card
          className="rounded-4 mt-4 mb-5 shadow"
          style={{ backgroundColor: "ghostwhite" }}
        >
          <Card.Body className="m-3">
            <Row>
              <Col
                lg={4}
                className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
              >
                <img
                  src="/images/mouftah.png"
                  className="rounded-circle img-fluid shadow-sm border-dark-subtle"
                  alt="Hussein Mouftah"
                  width="200"
                  height="200"
                />
              </Col>
              <Col lg={8}>
                <p className="text-muted fw-light mb-4 fs-5">
                  <i className="bi bi-quote" style={{ color: "#1b2f36" }}></i>
                  &nbsp; Fast, honest, and reliable. TechCare diagnosed my issue
                  quickly, explained everything clearly, and had me back to work
                  in no time. No upsells, just great service. Highly recommend!
                </p>
                <p className="display-6 mb-0">
                  <strong>Hussein Mouftah</strong>
                </p>
                <p className="text-muted mb-0 fs-4">A Cherished Customer</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Testimonial;
