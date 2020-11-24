
export interface IModalWindow {
    description: string;
    confirmationButtonText: string;
    cancelButtonText: string;
    handleConfirmationButton: () => void;
    handleCancelButton: () => void;

}