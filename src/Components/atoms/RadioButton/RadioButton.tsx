import React from 'react'
import Label from 'Components/atoms/Label/index'
import { IRadioButton } from './RadioButton.model'
import { 
    StyledRadioButton,
    StyledWrapper,
} from './RadioButton.styled'


const RadioButton = ({ 
    id, 
    name, 
    label, 
    value, 
    isCheckedRadio, 
    handleOnChange, 
    ...props 
}: IRadioButton): JSX.Element=> {
    
    return (
        <StyledWrapper {...props}>
            <StyledRadioButton 
                id={id} 
                name={name} 
                type='radio' 
                value={value}
                onChange={handleOnChange} 
                defaultChecked={isCheckedRadio(value)}
                />
            <Label text={label} forText={id}/>
        </StyledWrapper>
    )
}

export default RadioButton;