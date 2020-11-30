import { FormEvent } from 'react';

export interface IFormTemplate {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};
