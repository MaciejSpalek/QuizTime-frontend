import React, { useRef } from 'react';
import { useOutsideClick } from 'hooks';
import { IModalWindow, ModalConstants } from './ModalWindow.model';
import {
    StyledContainer,
    StyledParagraph,
    StyledWrapper,
    StyledButton,
    StyledWindow,
    StyledIconButton
} from './ModalWindow.styled';

const ModalWindow = ({ 
    isActive,
    description,
    handleCancel,
    handleConfirm,
} :IModalWindow) => {
    const windowRef = useRef(null);
    useOutsideClick(windowRef, () => isActive && handleCancel());

    if (!isActive) return <></>;
    return (
        <StyledContainer>
            <StyledWindow ref={windowRef}>
                <StyledWrapper>
                    <StyledIconButton
                        type='button'
                        icon='times'
                        handleOnClick={handleCancel}
                    />
                </StyledWrapper>
                <StyledWrapper>
                    <StyledParagraph text={description} />
                </StyledWrapper>
                <StyledWrapper>
                    <StyledButton
                        type='button'
                        text={ModalConstants.CONFIRM_BUTTON_TEXT}
                        handleOnClick={handleConfirm}
                    />
                    <StyledButton
                        type='button'
                        text={ModalConstants.CANCEL_BUTTON_TEXT}
                        handleOnClick={handleCancel} 
                    />
                </StyledWrapper>
            </StyledWindow>
        </StyledContainer>
    );
};

export default ModalWindow;
