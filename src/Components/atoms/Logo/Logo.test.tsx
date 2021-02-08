import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';
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