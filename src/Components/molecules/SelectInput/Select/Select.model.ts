import { ISingleOption } from '../SelectInput.model';

export interface ISelect {
  handleOnClick: (selection: ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  type: string;
}
