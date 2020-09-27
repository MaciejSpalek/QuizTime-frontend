import { ISingleOption } from '../SelectInput.model';

export interface IOption {
  type: string;
  option: ISingleOption;
  selectedOption: ISingleOption;
  currentOptionId: string;
  updateSelectedOption: (option: ISingleOption) => void;
}
