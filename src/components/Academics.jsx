import { Col, Container, Row } from "react-bootstrap";
// Data
import { CV_data } from "../GlobalConsts"
// components
import { StyledCVHeader, StyledCVtext, Bullet } from "./GlobalStylingComponents";
const { academics } = CV_data;

export default function Academics() {  
    return (
    <section className="sectionCV">
        <Container className="text-center">
            <StyledCVHeader>
                <h1>Education</h1>
                <div className="underline"></div>
            </StyledCVHeader>
            <Col className="mt-3 align-items-center">
                {academics.map((college) => {
                return (
                    <Col key={college.university} className="my-md-3">
                        <StyledCVtext>
                            <Container>
                                <Row>
                                    <Col>
                                    <h1>{college.university}</h1>
                                    </Col>
                                    <Col>
                                    <h1>{college.period}</h1>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="bd-grid">
                                <ul>
                                    {college.accolades.map((item) => <Bullet key={item} item={item} />)}
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