import React from 'react';
import { render } from '@testing-library/react';
import FormFieldTemplate from './FormFieldTemplate';

describe('FormFieldTemplate component', ()=> {
    test('Component render', ()=> {
        const { getByTestId } = render(
        <FormFieldTemplate>
            <div></div>
        </FormFieldTemplate>)
        expect(getByTestId('FormFieldTemplate')).toBeInTheDocument();
    })
})