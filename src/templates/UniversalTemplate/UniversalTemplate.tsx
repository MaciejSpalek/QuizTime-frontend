import React from 'react';
import { IUniversalTemplate } from './UniversalTemplate.model';
import {
    StyledPlaceholderTemplate,
    StyledWrapperTemplate,
    StyledMainTemplate,
    StyledPageTemplate
} from './UniversalTemplate.styled';

const UniversalTemplate = ({
    isPlaceholder,
    isWrapper,
    isMain,
    children,
    ...props }: IUniversalTemplate) => {

    if (isPlaceholder) {
        return (
            <StyledPlaceholderTemplate data-testid="PlaceholderTemplate" {...props}>
                {children}
            </StyledPlaceholderTemplate>
        )
    };

    if (isWrapper) {
        return (
            <StyledWrapperTemplate data-testid="WrapperTemplate" {...props}>
                {children}
            </StyledWrapperTemplate>
        )
    };

    if (isMain) {
        return (
            <StyledMainTemplate data-testid="MainTemplate" {...props}>
                {children}
            </StyledMainTemplate>
        )
    };

    return (
        <StyledPageTemplate data-testid="PageTemplate" {...props}>
            {children}
        </StyledPageTemplate>
    );
};

export default UniversalTemplate;