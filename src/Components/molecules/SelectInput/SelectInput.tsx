import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({ 
  options, 
  onClick, 
  selectCaption, 
  selectedColor, 
  selectedIconName, 
  type,
  ...props
}: ISelectInput): JSX.Element => {
  return ( 
    <Select 
      onClick={onClick} 
      options={options} 
      selectCaption={selectCaption} 
      selectedIconName={selectedIconName} 
      selectedColor={selectedColor}
      type={type} 
      {...props}
    />
  )
};

export default SelectInput;
