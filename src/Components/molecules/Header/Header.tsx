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
        <StyledHeader>
            <StyledWrapper>
                <StyledHeading> QuizTime </StyledHeading>
                <StyledParagraph text="Check our quizzes!" />
            </StyledWrapper>
            <StyledHeaderIcon />
        </StyledHeader>
    );
};

export default Header;