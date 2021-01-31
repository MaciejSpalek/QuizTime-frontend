import React, { useState } from 'react';
import { 
    StyledContainer,
    StyledTextWrapper,
    StyledButton,
    StyledParagraph,
    StyledLink
} from './CookieBanner.styled';

const CookieBanner = () => {
    const [cookiesAgreement, setCookiesAgreement] = useState<boolean>(!!localStorage.getItem('cookiesAgreement'))
    const handleButton = () => {
        localStorage.setItem('cookiesAgreement', JSON.parse("true"))
        setCookiesAgreement(true)
    }
    

    if(cookiesAgreement) return <></>

    return (
        <StyledContainer>
            <StyledTextWrapper>
                <StyledParagraph> 
                    This website uses cookies to ensure you get the best experience on our website. 
                    <StyledLink href="https://automattic.com/cookies/"> Learn more </StyledLink>
                </StyledParagraph>
                
            </StyledTextWrapper>
            <StyledButton handleOnClick={handleButton}> Got it! </StyledButton>
        </StyledContainer>
    );
};

export default CookieBanner;