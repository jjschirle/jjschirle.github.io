import { Col, Container } from "react-bootstrap";
// Data
import { CV_data } from "../GlobalConsts"
// components
import { StyledCVHeader, StyledCVtext } from "./GlobalStylingComponents";
const { presentations } = CV_data;

export default function Experience() {  
    return (
    <section className="sectionCV">
        <Container className="text-center">
            <StyledCVHeader>
                <h1>Presentations</h1>
                <div className="underline"></div>
            </StyledCVHeader>
            <Col className="mt-3 align-items-center">
                {presentations.map((pres) => {
                return (
                    <Col key={pres.title} className="my-md-3">
                        <StyledCVtext>
                            <StyledCVtext>
                                <p>
                                    <h1>"{pres.title}" </h1><i>{pres.event} </i><h1>{pres.location}</h1>
                                </p>
                            </StyledCVtext>
                        </StyledCVtext>
                    </Col>
                );
                })}
            </Col>
        </Container>
    </section>
    );
  };