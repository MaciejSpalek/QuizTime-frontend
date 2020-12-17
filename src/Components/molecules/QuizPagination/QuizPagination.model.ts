export interface IPagination {
    color: string | undefined;
    steps: number;
    counter: number;
    handleRightButton: () => void;
    handleLeftButton: () => void;
};