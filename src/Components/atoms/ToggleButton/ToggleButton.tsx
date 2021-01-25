import React from 'react'
import colors from 'styles/colors';
import { IFormColor } from 'Interfaces/quizInterfaces';
import { IToggleButton } from './ToggleButton.model';
import {
    StyledContainer,
    StyledQuizIcon,
    StyledUsersIcon,
    StyledIconWrapper
} from './ToggleButton.styled';

const RadioBar = ({ isSelect, onClick, ...props }: IToggleButton): JSX.Element => {
    const getColors = (isSelect: boolean): IFormColor => {
        if(isSelect) {
            return {
                primary: colors.BasicGreen,
                secondary: colors.DarkGreen
            }
        } else {
            return {
                primary: colors.Gray80,
                secondary: colors.Gray20
            }
        }
    };

    return (
        <StyledContainer onClick={onClick} { ...props }>
            <StyledIconWrapper primary={getColors(!isSelect).primary}>
                <StyledUsersIcon secondary={getColors(!isSelect).secondary}/>
            </StyledIconWrapper>
            <StyledIconWrapper primary={getColors(isSelect).primary}>
                <StyledQuizIcon secondary={getColors(isSelect).secondary}/>
            </StyledIconWrapper>
        </StyledContainer>
    );
};

export default RadioBar;