import React from "react";
import { Container,  Navbar, Nav } from 'react-bootstrap';
import  { NavLink } from "react-router-dom";

const TopMenu = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="datamed/">Data--Med</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink to="/" style={{color: "#FFFFFF", margin: "0 10px"}}>Home</NavLink>
                <NavLink to="/input" style={{color: "#FFFFFF", margin: "0 10px"}}>Data Input</NavLink>
                <NavLink to="/table" style={{color: "#FFFFFF", margin: "0 10px"}}>Table View</NavLink>
                <NavLink to="/htable" style={{color: "#FFFFFF", margin: "0 10px"}}>***</NavLink>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default TopMenu