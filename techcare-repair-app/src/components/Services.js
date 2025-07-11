import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => (
  <Container
    className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
    style={{ backgroundColor: "aliceblue" }}
    id="ourServices"
  >
    <h1 className="m-3 display-6 fw-bold">Our Services</h1>
    <p className="text-start ms-3 mt-4 me-5 pe-4 fs-3 mb-4">
      We offer a wide range of repair services to meet your needs, from fixing
      hardware problems, data recovery, or even removing malware. No matter
      what's wrong, we've got the expertise to get your tech as good as new!
    </p>
    <Row className="mt-2 mb-2">
      <Col md={3}>
        <Card
          className="rounded-4 shadow border-dark-subtle"
          style={{ backgroundColor: "ghostwhite" }}
        >
          <Card.Img
            variant="top"
            src="/images/desktop.jpg"
            style={{ height: "200px", border: "none" }}
            className="rounded-top-4"
          />
          <Card.Body>
            <Card.Title className="display-6 fw-bold fs-4">
              Desktop Repair
            </Card.Title>
            <Card.Text>
              Expert desktop repair services for hardware and software issues.
              Fast, reliable, and affordable solutions to keep your computer
              running.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card
          className="rounded-4 shadow border-dark-subtle"
          style={{ backgroundColor: "ghostwhite" }}
        >
          <Card.Img
            variant="top"
            src="/images/laptop.jpg"
            style={{ height: "200px", border: "none" }}
            className="rounded-top-4"
          />
          <Card.Body>
            <Card.Title className="display-6 fw-bold fs-4">
              Laptop Repair
            </Card.Title>
            <Card.Text>
              Reliable laptop repair services for hardware and software issues.
              Quick diagnostics, expert fixes, and affordable solutions to keep
              your laptop running.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card
          className="rounded-4 shadow border-dark-subtle"
          style={{ backgroundColor: "ghostwhite" }}
        >
          <Card.Img
            variant="top"
            src="/images/phone.jpg"
            style={{ height: "200px", border: "none" }}
            className="rounded-top-4"
          />
          <Card.Body>
            <Card.Title className="display-6 fw-bold fs-4">
              Phone Repair
            </Card.Title>
            <Card.Text>
              Fast and reliable phone repair services for screen damage, battery
              issues, software glitches, and more. Get your device back in top
              shape with expert care.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card
          className="rounded-4 shadow border-dark-subtle"
          style={{ backgroundColor: "ghostwhite" }}
        >
          <Card.Img
            variant="top"
            src="/images/smallDevice.jpg"
            style={{ height: "200px", border: "none" }}
            className="rounded-top-4"
          />
          <Card.Body>
            <Card.Title className="display-6 fw-bold fs-4">
              Small Devices
            </Card.Title>
            <Card.Text>
              Expert repair services for small devices like tablets,
              smartwatches, and accessories. Quick fixes for hardware and
              software issues.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Services;
