export interface IMultiStepForm {
    children: React.ReactChild[];
    counter: number;
    color?: string | undefined;
    handleRightButton: () => void;
    handleLeftButton: () => void;
    onSubmit: () => void;
};