import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';
import PageTemplate from 'templates/PageTemplate';
import Button from 'Components/atoms/Button';
import QuestionStep from '../QuestionStep';
import { FlexCenter, FlexColumn } from 'styles/mixins';

const anim = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledContainer = styled(PageTemplate)`
    overflow: auto;
    padding: 20px 10px;
`;

export const StyledTopWrapper = styled.div`
    ${FlexCenter}
    flex-direction: column;
    border: 2px solid ${colors.Gray80};
    border-radius: 5px;
    background-color: ${colors.White};
    padding: 20px;
    margin-bottom: 5px;
`;

export const StyledText = styled.p`
    font-size: 24px;
    color: ${colors.Gray20};
`;

export const StyledScore = styled.span`
    font-size: 48px;
    color: ${colors.BasicGreen};
    animation: ${anim} .5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
`;

export const StyledQuestionList = styled.ul`
    ${FlexColumn};
    justify-content: flex-start;
    list-style: none;
    margin-top: 20px;
`;

export const StyledQuestionListItem = styled.li`

`;


export const StyledButton = styled(Button)<{color: string}>`
    width: 300px;
    background-color: ${({ color }) => color ? color : colors.BasicGreen};
`;

export const StyledQuestionStep = styled(QuestionStep)`
    height: auto;
    padding: 20px 0;
`;


