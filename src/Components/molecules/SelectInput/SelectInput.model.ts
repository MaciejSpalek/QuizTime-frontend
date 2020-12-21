import { IFormColor } from "Interfaces/quizInterfaces";

export interface ISingleOption {
  id: string;
  title: string;
  value?: IFormColor;
  icon?: string | string[];
};

export interface ISelectInput {
  handleOnClick: (selection: ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  selectedIconName?: string;
  selectedColor?: IFormColor;
  type: string;
};

export enum OptionType {
  COLOR = "COLOR",
  ICON = "ICON"
};