import React, { useEffect, useState, useRef } from 'react';
import {
  StyledSelectCaption,
  StyledTopWrapper,
  StyledWrapper,
  StyledSelect
} from './Select.styled';
import Option from '../Option';
import { ISelect } from './Select.model';
import { ISingleOption } from '../SelectInput.model';
import { useOutsideClick } from 'hooks';

const Select = ({ handleOnClick, options, selectCaption, type }: ISelect): JSX.Element => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<ISingleOption>({id: "", title: ""});
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [currentOptionId, setCurrentOptionId] = useState<string>("");

  useOutsideClick(selectRef, () => {
    setIsSelectOpened(false)
  })

  const updateSelectedOption = (option: ISingleOption): void => {
      setCurrentOptionId(option.id)
      setSelectedOption(option);
  };

  useEffect(() => {
    handleOnClick(selectedOption);
  }, [selectedOption, handleOnClick]);

  return (
    <StyledWrapper ref={selectRef}>
      <StyledTopWrapper onClick={() => setIsSelectOpened(!isSelectOpened)}>
        <StyledSelectCaption id="selectCaption">
          {selectCaption}
        </StyledSelectCaption>
      </StyledTopWrapper>
      {isSelectOpened && (
        <StyledSelect aria-multiselectable="false" aria-labelledby="selectCaption" role="listbox">
          {options.map((option) => (
            <Option
              key={option.id}
              type={type}
              option={option}
              selectedOption={selectedOption}
              currentOptionId={currentOptionId}
              updateSelectedOption={updateSelectedOption}
            />
          ))}
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default Select;
