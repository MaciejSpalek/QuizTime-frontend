import { IChildren } from "Interfaces/children";

export interface IUniversalTemplate extends IChildren{
    isPlaceholder?: boolean;
    isWrapper?: boolean;
    isMain?: boolean;
};