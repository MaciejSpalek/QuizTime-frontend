import React from 'react';
import { render } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
    test('RadioButton should render', () => {
        const handleOnChange = () => {}
        const { getByTestId } = render(
            <RadioButton
                name="radio"
                value="example"
                checked
                onChange={handleOnChange}
            />)
        expect(getByTestId('RadioButton')).toBeInTheDocument();
    })
})