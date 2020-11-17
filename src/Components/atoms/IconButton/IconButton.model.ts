import { IconName } from '@fortawesome/fontawesome-svg-core';
import { MouseEvent } from 'react';

export interface IIconButton {
    icon: IconName;
    handleOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}