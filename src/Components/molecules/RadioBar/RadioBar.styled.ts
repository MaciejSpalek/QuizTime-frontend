import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter } from 'styles/Mixins';
import { QuizIcon, UsersIcon } from 'assets';

export const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    height: 45px;
    width: auto;
    border-radius: 30px;
    border: 2px solid ${colors.Gray80};
    background-color: ${colors.White};
    margin-left: 5px;
    padding: 0 2px;
    cursor: pointer;
`;

export const StyledQuizIcon = styled(QuizIcon)<{secondary: string}>`
    fill: ${({ secondary }) => secondary};
    width: 24px;
    height: 24px;
    transition: 1s ease-in-out;
`;

export const StyledUsersIcon = styled(UsersIcon)<{secondary: string}>`
    color: ${({ secondary }) => secondary};
    width: 30px;
    height: 30px;
    transition: 1s ease-in-out;
`;


export const StyledIconWrapper = styled.div<{primary: string}>`
    ${FlexCenter};
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: ${({ primary }) => primary};
    transition: .5s ease-in-out;

    :first-of-type {
        margin-right: 5px;
    }
`;