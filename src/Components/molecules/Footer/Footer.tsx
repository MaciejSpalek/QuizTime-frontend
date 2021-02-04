import React from 'react';
import { 
    StyledParagraph,
    StyledWrapper, 
    StyledFooter, 
    StyledAnchor,
    StyledIcon 
} from './Footer.styled';

const Footer = () => {
    return (
        <StyledFooter>
            <StyledWrapper>
                <StyledParagraph text='&copy; 2021 - Maciej Spałek' />
            </StyledWrapper>
            <StyledWrapper>
                <StyledAnchor href="https://github.com/MaciejSpalek/QuizTime-frontend" >
                    <StyledIcon icon={['fab', 'github-square']}/>
                </StyledAnchor>
            </StyledWrapper>
        </StyledFooter>
    );
};

export default Footer;