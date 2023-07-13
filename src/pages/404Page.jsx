// https://github.com/mshuber1981/github-react-portfolio-template
import React from "react";
import styled from "styled-components";
// Media
import ReactLogo from "../images/logo.svg"
// Components
import { Container } from "react-bootstrap";
import { Spin } from "../components/GlobalStylingComponents";
import { my_name } from "../GlobalConsts";

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));

  span {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  .logo-img {
    width: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    img {
      animation: ${Spin} infinite 20s linear;
    }
  }
`;

export default function NotFound() {

  React.useEffect(
    function () {
      document.title = `${my_name} | Portfolio`;
    },
  );

  return (
    <>
      <StyledNotFound>
        <Container className="d-flex justify-content-center">
          <span>4</span>
          <img src={ReactLogo} alt="React Logo" className="logo-img" />
          <span>4</span>
        </Container>
        <p className="text-center">Sorry, page not found...</p>
      </StyledNotFound>
    </>
  );
}