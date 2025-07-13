import React, { useEffect, useState } from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "../components/useTranslation";


const sections = [
  { id: "yearlyComparison", labelKey: "yearlyComparison" },
  { id: "salesOverTime", labelKey: "salesTrend" }
];


const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { setLanguage, t } = useTranslation();


  // Scroll to section with offset for fixed navbar
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70; // Adjust this value to match your navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top" className="px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          {t("dashboardTitle")}
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          <Nav variant="pills" className="align-items-center me-4">
            {sections.map((section) => (
              <Nav.Link
                key={section.id}
                href={`#${section.id}`}
                active={activeSection === section.id}
                onClick={handleNavClick(section.id)}
                style={{ cursor: "pointer" }}
              >
                {t(section.labelKey)}
              </Nav.Link>
            ))}
          </Nav>
          <Dropdown onSelect={(lang) => setLanguage(lang)} className="ms-2">
            <Dropdown.Toggle variant="light" className="rounded-pill p-2 fw-bold" style={{ fontSize: "0.85rem" }}>
               Language
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="en">English</Dropdown.Item>
              <Dropdown.Item eventKey="fr">Français</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;