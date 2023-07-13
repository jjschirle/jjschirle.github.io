import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/github-icon-1-logo-svgrepo-com.svg";

const StyledCardComponent = styled.div`
  .card {
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-title {
        font-family: "Montserrat";
        font-size: 1.5rem;
        font-weight: 600;
    }

    .card-text {
        font-family: "Montserrat";
        font-size: 1.25rem;
        font-weight: 500;
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;
// need to remove demo
export default function StyledCard({ image, name, description, url, demo }) {
    return (
      <StyledCardComponent>
        <Card>
          <Card.Img
            variant="top"
            src={image ? image : GH}
            alt={name}
            className="mx-auto"
          />
          <Card.Body className="overflow-auto text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Card.Link href={url}>
              {"View on GitHub "}
              <Icon icon="icomoon-free:github" />
            </Card.Link>
          </Card.Footer>
        </Card>
      </StyledCardComponent>
    );
  }