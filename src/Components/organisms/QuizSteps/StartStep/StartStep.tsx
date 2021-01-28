import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { IStartStep } from './StartStep.model';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';
import {
    StyledPageTemplate,
    StyledIconWrapper,
    StyledTextWrapper,
    StyledCounter,
    StyledWrapper,
    StyledButton,
    StyledAuthor,
    StyledTitle,
    StyledPhoto,
    StyledIcon
} from './StartStep.styled';


const StartStep = ({
    onClick,
    icon,
    title,
    author,
    counter,
    ...props
}: IStartStep): JSX.Element => {
    const history = useHistory();
    const moreQuizzes = () => history.push(`/${author}`);
    const backToHome = () => history.push(routes.home);
    const getAuthor = (author: string) => `by ${author}`;

    return (
        <StyledPageTemplate {...props}>
            <StyledWrapper>
                <StyledIconWrapper >
                    <StyledIcon icon={icon as IconName} />
                </StyledIconWrapper>
                <StyledIconWrapper >
                    <StyledIcon icon={'user'} />
                    <StyledCounter> {counter} </StyledCounter>
                </StyledIconWrapper>
            </StyledWrapper>
            <StyledWrapper>
                <StyledPhoto />
                <StyledTextWrapper>
                    <StyledTitle> {title} </StyledTitle>
                    <StyledAuthor text={getAuthor(author)} />
                </StyledTextWrapper>
            </StyledWrapper>
            <StyledWrapper>
                <StyledButton type='button' handleOnClick={onClick}>
                    Start
                </StyledButton>
                <StyledButton type='button' handleOnClick={moreQuizzes}>
                    More
                </StyledButton>
                <StyledButton type='button' handleOnClick={backToHome}>
                    Back
                </StyledButton>
            </StyledWrapper>
        </StyledPageTemplate>
    );
};

export default StartStep;