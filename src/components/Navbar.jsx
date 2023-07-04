import React from 'react'
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
// Images
import Logo from "../images/logo.svg";

const navLinks = {
    routes: [
      { id: "1R", name: "Home", route: "/" },
      { id: "2R", name: "About Me", route: "/About-Me" },
      { id: "3R", name: "CV", route: "/CV" },
      { id: "4R", name: "Personal Projects", route: "/Personal-Projects" },
      { id: "5R", name: "Contact", route: "/Contact" }
    ],
};

// Theme Toggle
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid;

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
`;

// Spacer for fixed Navigation bar
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

export default function NavBar() {
    const {pathname} = useLocation();
    return (
        <>
        <FixedNavSpacer />
        <Navbar
            id="nav"
            collapseOnSelect={true}
            expand="lg"
            fixed="top"
            >
                <Container>
                    <Navbar.Brand>
                       <img
                       alt="React Logo"
                       src={Logo}
                       width="35"
                       height="35"
                       className="rounded-circle"
                       />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        {navLinks.routes.map((el) => {
                            return (
                                <Nav.Item key={el.id}>
                                    <Link
                                        to={el.route}
                                        className={
                                                pathname === el.route ? "nav-link active" : "nav-link"
                                            }
                                    >
                                        {el.name}
                                     </Link>
                                </Nav.Item>
                            );
                        })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}