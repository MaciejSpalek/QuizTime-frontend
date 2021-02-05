export interface IMultiStepForm {
    children: React.ReactChild[];
    onSubmit: () => void;
    callback?: (props: any) => void;
};