import React from 'react';
import FormTemplate from './FormTemplate';
import { render } from '@testing-library/react';

describe('FormTemplate component', ()=> {
    test('Component render', ()=> {
        const { getByTestId } = render(
        <FormTemplate onSubmit={()=> {}}>
            <div></div>
        </FormTemplate>)
        expect(getByTestId('FormTemplate')).toBeInTheDocument();
    })
});