import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', ()=> {
    test('Component render', ()=> {
        const { getByTestId } = render(<ErrorMessage id="error" text="example error message" />)
        expect(getByTestId('ErrorMessage')).toBeInTheDocument();
    })
})