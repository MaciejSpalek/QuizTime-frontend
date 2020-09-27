import React, { useEffect, useState } from 'react';
import { OptionType } from '../SelectInput.model';
import { IOption } from './Option.model';
import {
  StyledOption,
  StyledOptionTitle,
  StyledIconField,
  StyledPaletteField,
  StyledCheckedSquare,
  StyledNoCheckedSquare,
  StyledWrapper,
} from './Option.styled';
import { PaletteIcon } from '../../../../assets';

const Option = ({
  type,
  option,
  selectedOption,
  currentOptionId,
  updateSelectedOption,
}: IOption): JSX.Element => {
  const { id, title, value, icon: Icon } = option;
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
          {isSelected ? <StyledCheckedSquare /> : <StyledNoCheckedSquare />}
            <StyledPaletteField value={value}>
              <PaletteIcon />
            </StyledPaletteField>
            <StyledOptionTitle>{title}</StyledOptionTitle>
        </StyledWrapper> :
        <StyledWrapper>
          {isSelected ? <StyledCheckedSquare /> : <StyledNoCheckedSquare />}
            <StyledIconField>
              <Icon />
            </StyledIconField>
            <StyledOptionTitle>{title}</StyledOptionTitle>
        </StyledWrapper>
      }
    </StyledOption>
  );
};

export default Option;
