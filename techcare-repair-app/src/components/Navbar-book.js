import { Navbar, Button, Container } from "react-bootstrap";
import { Link} from "react-router-dom";


const NavigationBar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top" className="px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          TechCare Repair Services
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          <Button
            variant="light"
            as={Link}
            to="/"
            className="ms-2 rounded-pill p-2 fw-bold"
            style={{ fontSize: "0.85rem" }}
          >
            <i class="bi bi-gear-fill"></i>
            &nbsp; Cancel
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
