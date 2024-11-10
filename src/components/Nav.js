import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Nav.css';

function BasicExample() {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle country selection
  const handleCountrySelect = (country) => {
    navigate(`/country/${country}`); // Navigate to the country gallery
  };

  // Function to handle navigation and scroll to top
  const handleHomeClick = () => {
    navigate("/"); // Navigate to homepage
    window.scrollTo(0, 0); // Scroll to the top
  };

  return (
    <Navbar expand="lg" className="navbar sticky-top">
      <Container className="nav-content">
        <Navbar.Brand className="logo" style={{ cursor: 'pointer' }} onClick={handleHomeClick}>
          {/* <strong>VdE</strong> */}
          <img src="/logo.png" alt="Description" className="navbar-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{ cursor: 'pointer' }} onClick={handleHomeClick}>
              Home
            </Nav.Link>
            <Nav.Link style={{ cursor: 'pointer' }} onClick={() => { 
              navigate("/"); // Navigate to homepage
              // If you want to scroll to the countries section, you can do so here
              setTimeout(() => {
                const section = document.getElementById("countries");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 0); // Allow time for the navigation to complete
            }}>
              Explore
            </Nav.Link>
            
            <Nav.Link style={{ cursor: 'pointer' }} onClick={() => { 
              navigate("/"); // Navigate to homepage
              setTimeout(() => {
                const section = document.getElementById("about");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 0); // Allow time for the navigation to complete
            }}>
              Insight
            </Nav.Link>
            <NavDropdown title="Countries" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleCountrySelect("Peru")}>Peru</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCountrySelect("Bolivia")}>Bolivia</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCountrySelect("Chile")}>Chile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCountrySelect("Argentina")}>Argentina</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCountrySelect("Colombia")}>Colombia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
