export interface IMultiStepWrapper {
    children: React.ReactNode[]
    counter: number;
    handleRightButton: () => void;
    handleLeftButton: () => void;
}