import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const WhyUs = () => {
  return (
    <Container
      className="mt-5 border border-dark-subtle rounded-4 pb-2 shadow-lg"
      style={{ backgroundColor: "azure" }}
      id="whyUs"
    >
      <h1 className="text-center display-6 mb-4 p-4 fw-bold">Why TechCare</h1>
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Card
            className="rounded-4 mt-4 mb-5 shadow"
            style={{ backgroundColor: "ghostwhite" }}
          >
            <Card.Body>
              <i class="bi bi-clock-history fs-1"></i>
              <Card.Title className="display-6 fw-bold fs-4 mt-2">
                Fast Service
              </Card.Title>
              <Card.Text>
                <p>
                  Our blazing fast technicians can complete most repairs in
                  under an hour.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="rounded-4 mt-4 mb-5 shadow"
            style={{ backgroundColor: "ghostwhite" }}
          >
            <Card.Body>
              <i class="bi bi-check2-circle fs-1"></i>
              <Card.Title className="display-6 fw-bold fs-4 mt-2">
                Quality Gaurantee
              </Card.Title>
              <Card.Text>
                <p>
                  Our expert team delivers reliable repairs with unmatched
                  precision.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="rounded-4 mt-4 mb-5 shadow"
            style={{ backgroundColor: "ghostwhite" }}
          >
            <Card.Body>
              <i class="bi bi-person-fill-gear fs-1"></i>
              <Card.Title className="display-6 fw-bold fs-4 mt-2">
                Expert technicians
              </Card.Title>
              <Card.Text>
                <p>
                  Trusted, professionally certified technicians with years of
                  experience in tech repair
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
