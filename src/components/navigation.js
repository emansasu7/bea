import React, { Component } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Cards from "./TeamCards";
// import Footer from "./footer";
import Hero from "./Hero";
import Logo from "../assets/logo-7.png";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={Logo}
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/Hero"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/About"}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/Cards"}>
                    The Team
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/"}>
                    Contact
                  </Nav.Link>
                </Nav>
                <Button variant="outline-success">Sign Up</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/Hero" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cards" element={<Cards />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
