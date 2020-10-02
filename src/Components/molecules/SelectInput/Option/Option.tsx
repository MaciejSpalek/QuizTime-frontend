import React, { useEffect, useState } from 'react';
import { OptionType } from '../SelectInput.model';
import { IOption } from './Option.model';
import {
  StyledOption,
  StyledOptionTitle,
  StyledIconField,
  StyledCheckedSquareIcon,
  StyledWrapper,
  StyledCategoryIcon,
  StyledPaletteIcon
} from './Option.styled';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const Option = ({
  type,
  option,
  selectedOption,
  currentOptionId,
  updateSelectedOption,
}: IOption): JSX.Element => {
  const { id, title, value, icon } = option;
  const [isSelected, setIsSelected] = useState(() => {
    return selectedOption.id === id
  });


  const handleOnOptionClick = () => {
    updateSelectedOption(option);
  };

  const manageIsSelectedState = () => {
    if (id === currentOptionId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    manageIsSelectedState();
  });


  return (
    <StyledOption
      onClick={() => handleOnOptionClick()}
      aria-selected={isSelected}
      isSelected={isSelected}
      role="option"
    >
      {type == OptionType.COLOR ?
        <StyledWrapper>
          {isSelected ? <StyledCheckedSquareIcon icon="check-square" /> : <StyledCheckedSquareIcon icon={['far', 'square']}/>}
            <StyledPaletteIcon icon="palette" value={value ? value.secondary : ''} />
            <StyledPaletteIcon icon="palette" value={value ? value.primary : ''} />
            <StyledOptionTitle>{title}</StyledOptionTitle>
        </StyledWrapper> :
        <StyledWrapper>
          {isSelected ? <StyledCheckedSquareIcon icon="check-square"/> : <StyledCheckedSquareIcon icon={['far', 'square']}/>}
            <StyledIconField>
              <StyledCategoryIcon icon={icon as IconName}/>
            </StyledIconField>
            <StyledOptionTitle>{title}</StyledOptionTitle>
        </StyledWrapper>}
    </StyledOption>
  );
};

export default Option;
