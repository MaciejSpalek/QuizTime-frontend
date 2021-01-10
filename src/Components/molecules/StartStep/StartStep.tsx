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
    counter
}: IStartStep): JSX.Element => {
    const history = useHistory();
    const moreQuizzes = () => history.push(`/${author}`);
    const backToHome = () => history.push(routes.home);
    const getAuthor = (author: string) => `by ${author}`;

    return (
        <StyledPageTemplate>

            <StyledWrapper>
                <StyledIconWrapper >
                    <StyledIcon icon={icon as IconName} />
                </StyledIconWrapper>
                <StyledIconWrapper >
                    <StyledIcon icon={'user'} />
                    <StyledCounter> { counter } </StyledCounter>
                </StyledIconWrapper>
            </StyledWrapper>

            <StyledWrapper>
                <StyledPhoto />
                <StyledTextWrapper>
                    <StyledTitle> { title } </StyledTitle>
                    <StyledAuthor text={getAuthor(author)} />
                </StyledTextWrapper>
            </StyledWrapper>

            <StyledWrapper>
                <StyledButton
                    type='button'
                    text='Start'
                    handleOnClick={onClick}
                />
                <StyledButton
                    type='button'
                    text='More'
                    handleOnClick={moreQuizzes}
                />
                <StyledButton
                    type='button'
                    text='Back'
                    handleOnClick={backToHome}
                />
            </StyledWrapper>

        </StyledPageTemplate>
    );
};

export default StartStep;