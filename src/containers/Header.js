import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="#">
          <h2>Shopify</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
