export interface IButton {
    text: string;
    type?: any;
    isDisabled?: boolean;
    handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}