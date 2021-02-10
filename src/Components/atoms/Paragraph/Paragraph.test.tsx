import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph component', ()=> {
    test('It should render', ()=> {
        const { getByTestId } = render(<Paragraph text="example text" />)
        expect(getByTestId('Paragraph')).toBeInTheDocument();
    })
})