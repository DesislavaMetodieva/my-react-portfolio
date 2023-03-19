import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <LinkContainer to="/">
        <Navbar.Brand>
        <Avatar sx={{ bgcolor: purple[300], marginLeft: '24px'}}>DM</Avatar>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex gap-4 me-4 font-semibold">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;