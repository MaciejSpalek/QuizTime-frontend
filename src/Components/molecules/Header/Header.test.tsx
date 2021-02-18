import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe('Header Component', ()=> {
    test('Header render', ()=> {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('Header')).toBeInTheDocument();
    });
});