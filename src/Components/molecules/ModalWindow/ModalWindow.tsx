import { useOutsideClick } from 'hooks';
import React, { useRef } from 'react'
import { IModalWindow } from './ModalWindow.model';
import {
    StyledContainer,
    StyledParagraph,
    StyledWrapper,
    StyledButton,
    StyledWindow,
    StyledIconButton
} from './ModalWindow.styled'

const ModalWindow = ({
    handleConfirmationButton,
    handleCancelButton,
    confirmationButtonText,
    cancelButtonText,
    description
}: IModalWindow) => {
    const windowRef = useRef(null);

    useOutsideClick(windowRef, () => {
        handleCancelButton();
    });

    return (
        <StyledContainer>
            <StyledWindow ref={windowRef}>
                <StyledWrapper>
                    <StyledIconButton
                        type='button'
                        icon='times'
                        handleOnClick={handleCancelButton}
                    />
                </StyledWrapper>
                <StyledWrapper>
                    <StyledParagraph text={description} />
                </StyledWrapper>
                <StyledWrapper>
                    <StyledButton type='button' text={confirmationButtonText} handleOnClick={handleConfirmationButton} />
                    <StyledButton type='button' text={cancelButtonText} handleOnClick={handleCancelButton} />
                </StyledWrapper>
            </StyledWindow>
        </StyledContainer>
    )
}

export default ModalWindow;
