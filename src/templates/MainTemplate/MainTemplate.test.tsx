import React from 'react';
import MainTemplate from './MainTemplate';
import { render } from '@testing-library/react';

describe('MainTemplate component', () => {
    test('Component render', () => {
        const { getByTestId } = render(
            <MainTemplate>
                <div></div>
            </MainTemplate>)
        expect(getByTestId('MainTemplate')).toBeInTheDocument();
    })
});