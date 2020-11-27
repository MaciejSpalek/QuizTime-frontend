import React, { useCallback, useEffect, useState } from 'react';
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
  selectedColor,
  selectedOption,
  selectedIconName,
  updateSelectedOption,
}: IOption): JSX.Element => {
  const { title, value, icon } = option;

  const [isSelected, setIsSelected] = useState(() => {
    if(type === OptionType.COLOR) {
      return value?.primary === selectedColor?.primary
    } else {
      return icon === selectedIconName;
    }
  });

  const manageIsSelectedState = useCallback(() => {
    if(type === OptionType.COLOR) {
        setIsSelected(value?.primary === selectedColor?.primary)
    } else {
        setIsSelected(icon === selectedIconName);
    }
  }, [icon, type, value, setIsSelected, selectedColor, selectedIconName]);

  const handleOnOptionClick = useCallback(() => {
    manageIsSelectedState();
    updateSelectedOption(option);
  }, [manageIsSelectedState, updateSelectedOption, option]);


  useEffect(() => {
    manageIsSelectedState();
  }, [handleOnOptionClick, manageIsSelectedState]);

  return (
    <StyledOption
      onClick={() => handleOnOptionClick()}
      aria-selected={isSelected}
      isSelected={isSelected}
      role="option"
    >
      {type === OptionType.COLOR ?
        <StyledWrapper>
          {isSelected ? <StyledCheckedSquareIcon icon="check-square" /> : <StyledCheckedSquareIcon icon={['far', 'square']}/>}
            <StyledPaletteIcon icon="palette" value={`${value?.secondary}`} />
            <StyledPaletteIcon icon="palette" value={`${value?.primary}`} />
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
