import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';
import {Nav,NavDropdown} from 'react-bootstrap';
import "../components/navbar.css";
import { useStore } from "../store/store";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import { userLogout } from "../store/userreducer";

function Brand() {
  const [state, dispatch] = useStore();
  const navigate = useNavigate();
  const {user: currentUser} = state;

  const logOut = useCallback((data) => {dispatch(userLogout()); navigate("/");}, [dispatch, navigate]);
    return (
      <>
      <Navbar className="py-4 " bg="white" expand="lg" >
      <Container>
        <Navbar.Brand>
        <a href="/"><img src={logo} style={{height: "72px"}} alt='logo'/></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" color="white" >
          <Nav className="me-auto">
            <Nav.Link href="/referees" className="navText">Referees</Nav.Link>
            <Nav.Link href="/matches" className="navText">Matches</Nav.Link>
            <Nav.Link href="/voting" className="navText">Voting</Nav.Link>
            <Nav.Link href="/voting" className="navText">Awards</Nav.Link>
            <NavDropdown title={<span className="navText">Highlights</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/weeklyawards">Weekly Highlights</NavDropdown.Item>
              <NavDropdown.Item href="/monthlyawards">Monthly Highlights</NavDropdown.Item>
            </NavDropdown>
            { !currentUser ?
              <a></a>:
              <Nav.Link href="/myprofile" className="navText">My Profile</Nav.Link>} 
          </Nav>

          { !currentUser ?
          <div style={{display:"flex"}}>
          <Nav.Link href="/login" align="center" style={{paddingRight: "10px"}}>
              <span className="btn btn-success">Login</span>
          </Nav.Link>
          <Nav.Link href="/signup" align="center">
              <span className="btn btn-danger">Sign Up</span>
          </Nav.Link>
          </div>
          :
          <Nav.Link onClick = {logOut} align="center">
              <span className="btn btn-danger">Log Out</span>
          </Nav.Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
  }
  export default Brand;