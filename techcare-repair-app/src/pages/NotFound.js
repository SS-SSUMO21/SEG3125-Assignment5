import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      className="mt-5 border border-dark-subtle rounded-4 shadow-lg"
      style={{
        backgroundColor: "aliceblue",
        paddingTop: "200px",
        paddingBottom: "200px",
        marginBottom: "250px",
      }}
      id="theBest"
    >
      <div className="d-flex flex-column align-items-center">
        <h1 className="m-3 display-6 fw-bold text-center">
          404! Looks Like You're Lost 😢
        </h1>
        <Button
          as={Link}
          to="/"
          variant="light"
          className="ms-2 rounded-pill p-2 fw-bold fs-6 shadow-lg mt-3"
        >
          Click me to get home
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
