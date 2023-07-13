import React from "react";
import { useAppContext } from "../AppContext";
import { Link } from "react-router-dom";
// Data
import { Project_data, github_url } from "../GlobalConsts";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "../components/GlobalStylingComponents";
import StyledCard from "../components/ProjectCardStyling";

export default function Projects() {
  const { theme } = useAppContext();

  return (
    <section className="section">
    <Container>
        <Container className="d-flex">
        <Title>
            <h1>Projects</h1>
            <div className="underline"></div>
        </Title>
        </Container>
        {Project_data.length !== 0 && (
        <>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {Project_data.map(function ({
                id,
                image,
                Name,
                description,
                url,
            }) {
                return (
                <Col key={id}>
                    <StyledCard
                    image={image}
                    name={Name}
                    description={description}
                    url={url}
                    />
                </Col>
                );
            })}
            </Row>
            <Container className="text-center mt-5">
                <Link to = {github_url}>
                <Button
                    size="lg"
                    variant={
                    theme === "light" ? "outline-dark" : "outline-light"
                    }
                >
                    All <Icon icon="icomoon-free:github" /> Projects
                </Button>
                </Link>
            </Container>
        </>
        )}
    </Container>
    </section>
  );
}