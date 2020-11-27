import { ISingleOption } from '../SelectInput.model';
import { IFormColor } from "Interfaces/quizInterfaces";

export interface IOption {
  type: string;
  option: ISingleOption;
  selectedColor?: IFormColor;
  selectedIconName?: string;
  selectedOption: ISingleOption;
  currentOptionId: string;
  updateSelectedOption: (option: ISingleOption) => void;
}
