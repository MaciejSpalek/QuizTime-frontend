export interface IMultiStepForm {
    children: React.ReactNode[]
    counter: number;
    handleRightButton: () => void;
    handleLeftButton: () => void;
    handleSubmit: () => void;
}