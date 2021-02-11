import React from 'react';
import Logo from './Logo';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Logo component', () => {
    test('It should render', () => {
        const { queryByTestId } = render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        );
        expect(queryByTestId('Logo')).toBeInTheDocument()
    })
})