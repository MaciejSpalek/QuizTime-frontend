import React, {
  useEffect,
  useState,
  useRef
} from 'react';
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

const Select = ({
  handleOnClick,
  options,
  selectCaption,
  type,
  selectedColor,
  selectedIconName,
  ...props
}: ISelect): JSX.Element => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<ISingleOption>({ id: "", title: "" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOptionId, setCurrentOptionId] = useState<string>("");

  useOutsideClick(selectRef, () => {
    setIsOpen(false);
  })

  const updateSelectedOption = (option: ISingleOption): void => {
    setCurrentOptionId(option.id);
    setSelectedOption(option);
  };

  useEffect(() => {
    handleOnClick(selectedOption);
  }, [selectedOption, handleOnClick]);

  useEffect(() => {
    console.log(isOpen, type)
  }, [isOpen, type]);

  return (
    <StyledWrapper {...props} ref={selectRef}>
      <StyledTopWrapper onClick={() => setIsOpen(!isOpen)}>
        <StyledSelectCaption id="selectCaption">
          {selectCaption}
        </StyledSelectCaption>
      </StyledTopWrapper>
      {isOpen && (
        <StyledSelect
          aria-labelledby="selectCaption"
          aria-multiselectable="false"
          isOpen={isOpen}
          role="listbox">
          {options.map((option) => (
            <Option
              key={option.id}
              type={type}
              option={option}
              selectedColor={selectedColor}
              selectedIconName={selectedIconName}
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
