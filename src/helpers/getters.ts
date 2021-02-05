import { RefObject } from "react";

export const getElementWidth = (ref: RefObject<HTMLElement>) => {
    if (null !== ref.current) {
        return ref.current.clientWidth;
    }
};
