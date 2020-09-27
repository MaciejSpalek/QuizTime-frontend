export interface ISingleOption {
  id: string;
  title: string;
  value?: string;
  icon?: any;
}

export interface ISelectInput {
  handleOnClick: (callback: () => ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  type: string;
}

export enum OptionType {
  COLOR = "COLOR",
  ICON = "ICON"
}