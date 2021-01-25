export interface IButton {
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    isSpinner?: boolean;
    children?: any;
    handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}