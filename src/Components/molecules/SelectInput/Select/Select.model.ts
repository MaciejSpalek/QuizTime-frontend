import { ISingleOption } from '../SelectInput.model';
import { Color } from "Interfaces/quizInterfaces";

export interface ISelect {
  handleOnClick: (selection: ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  selectedColor?: Color;
  selectedIconName?: string;
  type: string;
}
