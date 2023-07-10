import React from 'react';
import Skills from '../components/Skills'
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 0 auto;
  font-family: "Montserrat";
  text-align: left;
  .underline {
    height: 0.25rem;
    width: 100%;
    min-width: 3rem;
    border-radius: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0 auto 1.5rem auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--primary-light), var(--primary-dark))"
        : "linear-gradient(to right, var(--primary-dark), var(--primary-light))"};
  }
`;
export default function CV() {
    return(
        <Skills />
    );
};
