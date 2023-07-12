import styled, { keyframes } from "styled-components";

// Animations
export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Loading Spinner
export const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--primary);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Titles
export const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-family: "Permanent Marker";
  text-align: center;
  .underline {
    height: 0.25rem;
    width: 75%;
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

export const StyledCVHeader = styled.div`
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

export const StyledCVtext = styled.div`
  margin: 0 auto;
  font-family: "Montserrat";
  text-align: left;
  h1 {

    display: inline;
    font-size: 1.5rem;
  }
  ul{
    font-size: 1.5rem;
  }
  i{
    display: inline;
    font-size: 1.5rem;
  }
  .bullet__point{
  display: inline-flex;
  width: 5px;
  height: 5px;
  background-color: var(--text-color);
  border-radius: 50%;
  margin-right: 0.75rem;
  }
  .bd-grid {
    display: grid;
    gap: 1.5rem;
  }
`;

export const Bullet = ({ item }) => (
  <li className="item__name">
    <span className="bullet__point" /> {item}
  </li>
);