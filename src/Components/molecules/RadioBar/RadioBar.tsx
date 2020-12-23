import { IFormColor } from 'Interfaces/quizInterfaces';
import React, { useEffect, useState } from 'react'
import colors from 'styles/Colors';
import {
    StyledContainer,
    StyledQuizIcon,
    StyledUsersIcon,
    StyledIconWrapper
} from './RadioBar.styled'
import { IRadioBox } from './RadioBox.model';

const RadioBar = ({ isSelect, onClick, ...props }: IRadioBox): JSX.Element => {
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