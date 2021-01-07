import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/Header.css";

const Header = ({ states }) => {
  const statesNames = states.map((state) => (
    <div key={state.state}>
      <NavDropdown.Item>{state.state}</NavDropdown.Item>
      <NavDropdown.Divider />
    </div>
  ));

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="info  "
      variant="dark"
      className="py-3"
    >
      <Navbar.Brand>COVIED 19 TRACKER</Navbar.Brand>
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
      <Nav className="m-auto">
        <DropdownButton title="Select State" variant="info">
          <div className="Headr-dropdwon">{states.length && statesNames}</div>
        </DropdownButton>
      </Nav>
      {/* <Nav> */}

      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
