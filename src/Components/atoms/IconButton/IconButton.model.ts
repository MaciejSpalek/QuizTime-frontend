import { IconName } from '@fortawesome/fontawesome-svg-core';
import { MouseEvent } from 'react';

export interface IIconButton {
    icon: IconName;
    type: 'button' | 'submit' | 'reset';
    handleOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
};