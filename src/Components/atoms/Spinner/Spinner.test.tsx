import React from 'react';
import Spinner from './Spinner';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe("Spinner component", ()=> {
    test('It should render', ()=> {
        const { queryByTestId } = render(<Spinner />)
        expect(queryByTestId('Spinner')).toBeInTheDocument()
    })
})