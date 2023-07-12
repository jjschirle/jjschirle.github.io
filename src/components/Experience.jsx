import { Col, Container, Row } from "react-bootstrap";
// Data
import { CV_data } from "../GlobalConsts"
// components
import { StyledCVHeader, StyledCVtext, Bullet } from "./GlobalStylingComponents";
const { experience } = CV_data;

export default function Experience() {  
    return (
    <section className="sectionCV">
        <Container className="text-center">
            <StyledCVHeader>
                <h1>Experience</h1>
                <div className="underline"></div>
            </StyledCVHeader>
            <Col className="mt-3 align-items-center">
                {experience.map((jobs) => {
                return (
                    <Col key={jobs.title} className="my-md-3">
                        <StyledCVtext>
                            <Container>
                                <Row>
                                    <Col>
                                    <h1>{jobs.title}</h1>
                                    </Col>
                                    <Col>
                                    <h1>{jobs.period}</h1>
                                    </Col>
                                </Row>
                            </Container>
                            <h1>{jobs.company}</h1>
                            <div className="bd-grid">
                                <ul>
                                    {jobs.description.map((item) => <Bullet key={item} item={item} />)}
                                </ul>
                            </div>
                        </StyledCVtext>
                    </Col>
                );
                })}
            </Col>
        </Container>
    </section>
    );
  };