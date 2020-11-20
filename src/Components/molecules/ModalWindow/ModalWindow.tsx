import React, { useState } from 'react'
import { IModalWindow } from './ModalWindow.model';
import {
    StyledContainer,
    StyledParagraph,
    StyledButtonWrapper,
    StyledButton,
    StyledWindow,
    StyledIconButton
} from './ModalWindow.styled'

const ModalWindow = ({ 
    handleConfirmButton, 
    handleDeclineButton, 
    description
}: IModalWindow) => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <StyledContainer>
            <StyledWindow>
                <StyledParagraph text={description} />
                <StyledButtonWrapper>
                    <StyledButton text="Exit" handleOnClick={handleConfirmButton}/>
                    <StyledButton text="Cancel" handleOnClick={handleDeclineButton} />
                </StyledButtonWrapper>
                <StyledIconButton icon={'times'} handleOnClick={() => console.log("close")} /> 
            </StyledWindow>
        </StyledContainer>
    )
}

export default ModalWindow;
