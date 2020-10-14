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
  selectedColor,
  selectedOption,
  selectedIconName,
  currentOptionId,
  updateSelectedOption,
}: IOption): JSX.Element => {
  const { id, title, value, icon } = option;

  const [isSelected, setIsSelected] = useState(() => {
    if(type === OptionType.COLOR) {
      return value?.primary === selectedColor?.primary
    } else {
      return icon === selectedIconName;
    }
  });


  useEffect(() => {
    console.log("id: ",  "selectedOption: " ,selectedOption, "selectedIconName: ", selectedIconName, "Type: ", type)
  }, [selectedOption, selectedIconName])

  const handleOnOptionClick = () => {
    console.log("onclick")
    manageIsSelectedState();
    updateSelectedOption(option);
  };

  const manageIsSelectedState = () => {
    console.log("manageIsSelectedState")
    if(type === OptionType.COLOR) {
      console.log('color')
      if(value?.primary === selectedColor?.primary) {
        setIsSelected(true)
      } else {
        setIsSelected(false)
      }
    } else {
      console.log("icon")
      if(icon === selectedIconName) {
        setIsSelected(true)
      } else {
        setIsSelected(false)
      }
    }
  };

  useEffect(() => {
    manageIsSelectedState();
  }, [handleOnOptionClick]);

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
