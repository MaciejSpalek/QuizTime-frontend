export interface IRadioButton {
    id: string;
    name: string;
    label?: string;
    value: string;
    isCheckedRadio: (value: string) => boolean;
    handleOnChange?: (e: any) => void;
}