import { Col, Container, Row } from "react-bootstrap";
// skills
import { my_skills } from "../GlobalConsts"
// Components
import { StyledCVHeader } from "./GlobalStylingComponents";


export default function Skills() {  
    return (
    <section className="sectionCV">
        <Container className="text-center">
        <StyledCVHeader>
            <h1>Skills</h1>
            <div className="underline"></div>
        </StyledCVHeader>
        <Row className="mt-3 align-items-center">
            {my_skills.map((skills) => {
            return (
                <Col xs={4} key={skills.id} className="my-md-5">
                <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                </figure>
                </Col>
            );
            })}
        </Row>
        </Container>
    </section>
    );
  };