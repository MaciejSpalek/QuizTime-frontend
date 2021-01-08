import React from 'react';
import { IStartStep } from './StartStep.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useHistory } from 'react-router-dom';
import {
    StyledPageTemplate,
    StyledIconWrapper,
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
    counter
}: IStartStep): JSX.Element => {
    const history = useHistory();
    const moreQuizzes = () => history.push(`/${author}`);
    const backToHome = () => history.push('/');
    const getAuthor = (author: string) => `by ${author}`;

    return (
        <StyledPageTemplate>
            <StyledWrapper >
                <StyledIconWrapper >
                    <StyledIcon icon={icon as IconName} />
                </StyledIconWrapper>
                <StyledIconWrapper >
                    <StyledIcon icon={'user'} />
                    <StyledCounter> {counter} </StyledCounter>
                </StyledIconWrapper>
            </StyledWrapper>
            <StyledWrapper >
                <StyledTitle >{title}</StyledTitle>
                <StyledAuthor text={getAuthor(author)} />
            </StyledWrapper>
            <StyledWrapper>
                <StyledButton
                    type='button'
                    text='Start quiz'
                    handleOnClick={onClick}
                />
                <StyledButton
                    type='button'
                    text='More quizzes'
                    handleOnClick={moreQuizzes}
                />
                <StyledButton
                    type='button'
                    text='Back'
                    handleOnClick={backToHome}
                />
            </StyledWrapper>
            <StyledPhoto />
        </StyledPageTemplate>
    );
};

export default StartStep;