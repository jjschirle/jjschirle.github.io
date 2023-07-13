import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../components/GlobalStylingComponents";
import { about_text } from '../GlobalConsts';
import profile_pic from "../images/portrait.jpg"


const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
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
          <Row className="d-md-flex justify-content-center">
                {about_text.map((id) => {
                return (
                    <Row key={about_text.id} className="">
                            <Container>
                              <p>{id.text}</p>
                            </Container>
                    </Row>
                );
                })}
            <Col className="d-md-flex text-center">
              <img
                src={profile_pic}
                alt="profile pic"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "20rem", height: "20rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    );
};
