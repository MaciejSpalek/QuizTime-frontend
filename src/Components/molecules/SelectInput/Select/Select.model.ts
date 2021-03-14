import { ISingleOption } from '../SelectInput.model';
import { IFormColor } from "Interfaces/quizInterfaces";

export interface ISelect {
  onClick: (selection: ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  selectedColor?: IFormColor;
  selectedIconName?: string;
  type: string;
}
