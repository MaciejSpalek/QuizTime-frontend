import React from 'react';
import ToggleButton from './ToggleButton';
import { render } from '@testing-library/react';
  
describe('ToggleButton component', () => {
    test('ToggleButton should render', () => {
        const { getByTestId } = render(
                    <ToggleButton 
                        onClick={()=>{}}
                        isSelect
                    />
        )
        expect(getByTestId('ToggleButton')).toBeInTheDocument();
    })
})
