import colors from 'styles/colors';
import Button from 'Components/atoms/Button';
import PageTemplate from 'templates/PageTemplate';
import styled from 'styled-components';
import { QuestionStep } from 'Components/organisms/QuizSteps';
import { FlexCenter, FlexColumn, scrollBar } from 'styles/Mixins';
import { twinkleScale } from 'styles/Animations';

export const StyledContainer = styled(PageTemplate)`
    overflow: auto;
    padding: 20px 10px;
    ${scrollBar};
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
    animation: ${twinkleScale} .5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
`;

export const StyledQuestionList = styled.ul`
    ${FlexColumn};
    justify-content: flex-start;
    list-style: none;
    margin-top: 20px;
`;

export const StyledButton = styled(Button)`
    width: 300px;
`;

export const StyledQuestionStep = styled(QuestionStep)`
    height: auto;
    padding: 20px 0;
`;


