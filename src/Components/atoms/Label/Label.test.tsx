import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label component', ()=> {
    test('It should render', ()=> {
        const { getByTestId } = render(<Label />)
        expect(getByTestId('Label')).toBeInTheDocument();
    })
})