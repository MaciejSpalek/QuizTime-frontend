import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Paragraph component', ()=> {
    test('It should render', ()=> {
        const { getByTestId } = render(<Input type="text"/>)
        expect(getByTestId('Input')).toBeInTheDocument();
    })
})