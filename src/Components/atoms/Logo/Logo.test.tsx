import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

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