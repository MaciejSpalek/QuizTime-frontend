import React from 'react';
import Link from './Link';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Link component', () => {
    test('Link should render', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Link to="/" />
            </BrowserRouter>
        )
        expect(getByTestId('Link')).toBeInTheDocument();
    })

    test('Link with props isNavLink should render as a NavLink', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Link to="/" isNavLink/>
            </BrowserRouter>
        )
        expect(getByTestId('NavLink')).toBeInTheDocument();
    })
})