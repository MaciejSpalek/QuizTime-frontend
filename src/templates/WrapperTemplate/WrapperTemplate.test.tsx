import React from 'react';
import WrapperTemplate from './WrapperTemplate';
import { render } from '@testing-library/react';

describe('WrapperTemplate component', () => {
    test('Component render', () => {
        const { getByTestId } = render(
            <WrapperTemplate>
                <div></div>
            </WrapperTemplate>)
        expect(getByTestId('WrapperTemplate')).toBeInTheDocument();
    })
});