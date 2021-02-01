import React, { useEffect, useState } from 'react';
import { 
    StyledContainer,
    StyledTextWrapper,
    StyledButton,
    StyledParagraph,
    StyledLink
} from './CookieBanner.styled';

const CookieBanner = () => {
    const [cookiesAgreement, setCookiesAgreement] = useState<boolean>(localStorage.getItem('cookiesAgreement') === 'true');
    const handleButton = () => {
        localStorage.setItem('cookiesAgreement', JSON.parse("true"));
        setCookiesAgreement(true);
    };

    useEffect(() => {
        !cookiesAgreement && localStorage.setItem('cookiesAgreement', JSON.parse("false"));
    }, []);
    
    if(cookiesAgreement) return <></>;

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