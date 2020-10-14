import { ISingleOption } from '../SelectInput.model';
import { Color } from "Interfaces/quizInterfaces";

export interface IOption {
  type: string;
  option: ISingleOption;
  selectedColor?: Color;
  selectedIconName?: string;
  selectedOption: ISingleOption;
  currentOptionId: string;
  updateSelectedOption: (option: ISingleOption) => void;
}
