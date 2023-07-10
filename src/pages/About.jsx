import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../components/GlobalStylingComponents";
import { about_text } from '../GlobalConsts';
import profile_pic from "../images/luca_pic.JPEG"

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function About() {
    

    return (
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {about_text && <p>{about_text}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={profile_pic}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    );
};
