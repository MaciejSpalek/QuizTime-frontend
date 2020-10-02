import { Color } from "Interfaces/quizInterfaces";

export interface ISingleOption {
  id: string;
  title: string;
  value?: Color;
  icon?: string | string[];
}

export interface ISelectInput {
  handleOnClick: (selection: ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  type: string;
}

export enum OptionType {
  COLOR = "COLOR",
  ICON = "ICON"
}