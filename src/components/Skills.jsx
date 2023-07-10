// skills
import { my_skills } from "../GlobalConsts"
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./GlobalStylingComponents";


export default function Skills() {  
    return (
    <section className="section">
        <Container className="text-center">
        <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
        </Title>
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