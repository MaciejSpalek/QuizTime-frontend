import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({ options, handleOnClick, selectCaption, type }: ISelectInput): JSX.Element => {
  return ( 
    <Select 
      handleOnClick={handleOnClick} 
      options={options} 
      selectCaption={selectCaption} 
      type={type} 
    />
  )
};

export default SelectInput;
