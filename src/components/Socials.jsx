import React from "react";
import { github_url, linkedin_url } from "../GlobalConsts"
import styled from "styled-components";
import { Icon } from "@iconify/react";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
    return (
      <StyledSocialLinks>
        <a
          href={github_url}
          aria-label="Check out my GitHub profile."
          className="link-icons"
        >
          <Icon icon="icomoon-free:github" />
        </a>
        <a
          href={linkedin_url}
          aria-label="Check out my Linkedin profile."
          className="link-icons"
        >
          <Icon icon="icomoon-free:linkedin" />
        </a>
      </StyledSocialLinks>
    );
  }