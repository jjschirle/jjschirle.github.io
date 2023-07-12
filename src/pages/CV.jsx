import React from 'react'
import { Container } from "react-bootstrap";
import styled from "styled-components";

// import components
import Academics from "../components/Academics"
import Experience from "../components/Experience"
import Presentations from "../components/Presentations"
import Skills from '../components/Skills'

export default function CV() {
    return(
    <Container>  
        <Academics />
        <Experience />
        <Presentations />
        <Skills />
      </Container>
    );
};
