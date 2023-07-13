import React from "react";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/GlobalStylingComponents";
import ContactForm from "../components/ContactForm";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  return (
    <StyledSection className="d-flex flex-column justify-content-center">
    <Container className="d-flex">
        <Title>
        <h1>Contact Me</h1>
        <div className="underline"></div>
        </Title>
    </Container>
    <Container>
        <ContactForm />
    </Container>
    </StyledSection>
  );
}