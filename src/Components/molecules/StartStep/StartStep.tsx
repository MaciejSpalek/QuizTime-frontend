import React from 'react';
import { IStartStep } from './StartStep.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useHistory } from 'react-router-dom';
import {
    StyledIcon,
    StyledPageTemplate,
    StyledWrapper,
    StyledCounter,
    StyledTitle,
    StyledButton,
    StyledAuthor,
    StyledIconWrapper
} from './StartStep.styled';


const StartStep = ({
    onClick,
    icon,
    colors,
    title,
    author
}: IStartStep): JSX.Element => {
    const { primary, secondary } = colors;
    const history = useHistory();
    const moreQuizzes = () => history.push(`/${author}`);
    const backToHome = () => history.push('/');
    const getAuthor = (author: string) => `by ${author}`;

    return (
        <StyledPageTemplate>
            <StyledWrapper primary={primary}>
                <StyledIconWrapper secondary={secondary}>
                    <StyledIcon primary={primary} icon={icon as IconName} />
                </StyledIconWrapper>
                <StyledIconWrapper secondary={secondary}>
                    <StyledIcon primary={primary} icon={'user'} />
                    <StyledCounter> {4} </StyledCounter>
                </StyledIconWrapper>
            </StyledWrapper>
            <StyledWrapper primary={primary}>
                <StyledTitle secondary={primary}>{title}</StyledTitle>
                <StyledAuthor text={getAuthor(author)} />
            </StyledWrapper>
            <StyledWrapper primary={primary}>
                <StyledButton
                    type='button'
                    text='Start quiz'
                    handleOnClick={onClick}
                    primary={primary}
                />
                <StyledButton
                    type='button'
                    text='More quizzes'
                    handleOnClick={moreQuizzes}
                    primary={primary}
                />
                <StyledButton
                    type='button'
                    text='Back'
                    handleOnClick={backToHome}
                    primary={primary}
                />
            </StyledWrapper>
        </StyledPageTemplate>
    );
};

export default StartStep;