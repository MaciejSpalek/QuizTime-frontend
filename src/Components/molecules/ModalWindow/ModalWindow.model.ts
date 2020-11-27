export interface IModalWindow {
    isActive: boolean;
    description: string;
    handleConfirm: ()=> void;
    handleCancel: ()=> void;
}

export enum ModalConstants {
    CONFIRM_BUTTON_TEXT = "Yes",
    CANCEL_BUTTON_TEXT= "No"
}