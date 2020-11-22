export interface IButton {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}