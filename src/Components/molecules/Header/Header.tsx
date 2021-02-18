import React from 'react';
import { 
    StyledHeaderIcon,
    StyledParagraph,
    StyledHeading,
    StyledWrapper,
    StyledHeader
} from './Header.styled';

const Header = () => {
    return (
        <StyledHeader data-testid="Header">
            <StyledWrapper>
                <StyledHeading> QuizTime </StyledHeading>
                <StyledParagraph text="Let's check our quizzes!" />
            </StyledWrapper>
            <StyledHeaderIcon />
        </StyledHeader>
    );
};

export default Header;