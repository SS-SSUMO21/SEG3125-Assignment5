import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Col,
  Form,
  Modal,
  Row,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppointmentForm = forwardRef(({ selectedDate, onFormValid }, ref) => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const valid =
      !!selectedDate &&
      time.trim() !== "" &&
      name.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      description.trim() !== "";
    onFormValid && onFormValid(valid);
  }, [selectedDate, time, name, phone, email, description, onFormValid]);

  useImperativeHandle(ref, () => ({
    submit: () => {
      setShowModal(true);
    },
  }));

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
    navigate("/", { replace: true });
  };

  const resetForm = () => {
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setDescription("");
  };

  function formatTime(time24) {
    if (!time24) return "";
    const [hourStr, minute] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }

  return (
    <div className="appointment-form ms-4">
      <h1 className="text-center-4 mb-4 fw-bold">Tell us about yourself</h1>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formTime" className="mb-4">
              <Form.Label className="fw-bold ms-1">
                What time works for you?
              </Form.Label>
              <OverlayTrigger
                placement="top"
                trigger="hover"
                overlay={
                  <Popover id="popover-time">
                    <Popover.Body>
                      Fill in the time by typing on your keyboard, use arrow
                      keys to navigate through different segments
                    </Popover.Body>
                  </Popover>
                }
              >
                <Form.Control
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="rounded-4 shadow-sm"
                />
              </OverlayTrigger>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Label className="fw-bold ms-1">Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-4 shadow-sm"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formPhone" className="mb-4">
          <Form.Label className="fw-bold ms-1">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="rounded-4 shadow-sm"
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-4">
          <Form.Label className="fw-bold ms-1">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-4 shadow-sm"
          />
        </Form.Group>
        <Form.Group controlId="formDescription" className="mb-4">
          <Form.Label className="fw-bold ms-1">
            Detailed Description of the Issue
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="rounded-4 shadow-sm"
          />
        </Form.Group>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Booked</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully booked your appointment
          {selectedDate && (
            <>
              <br />
              <strong>Date:</strong> {selectedDate.toLocaleDateString()}
              <br />
              <strong>Time:</strong> {formatTime(time)}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-dark text-white rounded-pill border-0 px-4 py-2 shadow"
            onClick={handleCloseModal}
          >
            Exit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default AppointmentForm;
