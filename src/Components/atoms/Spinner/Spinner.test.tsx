import React from 'react';
import Spinner from './Spinner';
import { render } from '@testing-library/react';

describe("Spinner component", ()=> {
    test('It should render', ()=> {
        const { queryByTestId } = render(<Spinner />)
        expect(queryByTestId('Spinner')).toBeInTheDocument()
    })
})