import { useOutsideClick } from 'hooks';
import React, { useRef } from 'react'
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
    const windowRef = useRef(null);

    useOutsideClick(windowRef, () => {
        handleDeclineButton();
    });

    return (
        <StyledContainer>
            <StyledWindow ref={windowRef}>
                <StyledParagraph text={description} />
                <StyledButtonWrapper>
                    <StyledButton type='button' text="Exit" handleOnClick={handleConfirmButton}/>
                    <StyledButton type='button' text="Cancel" handleOnClick={handleDeclineButton} />
                </StyledButtonWrapper>
                {/* <StyledIconButton icon={'times'} handleOnClick={() => console.log("close")} />  */}
            </StyledWindow>
        </StyledContainer>
    )
}

export default ModalWindow;
