import React from "react";
import {
  StyledParagraph,
  StyledWrapper,
  StyledFooter,
  StyledAnchor,
  StyledIcon,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter data-testid="Footer">
      <StyledWrapper>
        <StyledParagraph text="&copy; 2021 - Maciej Spałek" />
      </StyledWrapper>
      <StyledWrapper>
        <StyledAnchor
          aria-label="Check github repository"
          href="https://github.com/MaciejSpalek/QuizTime-frontend"
        >
          <StyledIcon icon={["fab", "github-square"]} />
        </StyledAnchor>
        <StyledAnchor
          aria-label="Check my linkedin profile"
          href="https://www.linkedin.com/in/maciej-spałek"
        >
          <StyledIcon icon={["fab", "linkedin"]} />
        </StyledAnchor>
        <StyledAnchor
          aria-label="Check my facebook profile"
          href="https://www.facebook.com/MaciekSpalek/"
        >
          <StyledIcon icon={["fab", "facebook-square"]} />
        </StyledAnchor>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
