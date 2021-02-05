import { RefObject } from "react";

export const isInputTextMatch = (inputText: string, value: string) => {
    const regex = new RegExp(`^${inputText}`, 'i');
    return regex.test(value);
};

export const clearInput = (ref: RefObject<HTMLInputElement>) => { 
    if (null !== ref.current) {
        ref.current.value = ''
    }
};

