export interface IMultiStepForm {
    children: React.ReactChild[];
    counter: number;
    handleRightButton: () => void;
    handleLeftButton: () => void;
    onSubmit: () => void;
};