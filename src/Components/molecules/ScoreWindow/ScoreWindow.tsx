import Button from 'Components/atoms/Button';
import React, { useState } from 'react'
import { IScoreWindow } from './ScoreWindow.model';
import {
    StyledTopWrapper,
    StyledContainer,
    StyledListItem,
    StyledButton,
    StyledScore,
    StyledText,
    StyledList,
} from './ScoreWindow.styled';

const ScoreWindow = ({ score, questions }: IScoreWindow): JSX.Element => {
    const [isListOpen, setIsListOpen] = useState(false);
    return (
        <StyledContainer>
            <StyledTopWrapper>
                <StyledText> SCORE </StyledText>
                <StyledScore> {score} </StyledScore>
            </StyledTopWrapper>
            <StyledButton text='Try again' />
            <StyledButton text='Back' />
            <StyledButton text={isListOpen ? 'Hide answers' : 'Show answers'} />
            {/* <StyledList>
                {questions?.map(({_id, content, answers}) =>
                    <StyledListItem key={_id}>
                        {content}
                    </StyledListItem>)}
            </StyledList> */}
        </StyledContainer>
    );
};

export default ScoreWindow;

