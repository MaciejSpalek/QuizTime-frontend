import React from 'react';
import {
    StyledHeaderIcon,
    StyledParagraph,
    StyledHeading,
    StyledWrapper,
    StyledHeader,
    StyledStrong,
} from './Header.styled';

const Header = () => {
    return (
        <StyledHeader data-testid="Header">
            <StyledWrapper>
                <StyledHeading> QuizTime </StyledHeading>
                <StyledParagraph>
                    Check our <StyledStrong> quizzes </StyledStrong> below!
                </StyledParagraph>
            </StyledWrapper>
            <StyledHeaderIcon />
        </StyledHeader>
    );
};

export default Header;