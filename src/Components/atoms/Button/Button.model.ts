export interface IButton extends React.HTMLAttributes<HTMLButtonElement>{
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    isSpinner?: boolean;
    handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}