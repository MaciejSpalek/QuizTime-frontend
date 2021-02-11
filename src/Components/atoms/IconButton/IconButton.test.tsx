import React from 'react';
import IconButton from './IconButton';
import { render } from '@testing-library/react';
import FontAwesomeLib from 'includes/FontAwesomeLib';

describe('IconButton component', ()=> {
    test('Render button with icon', ()=> {
        const { getByTestId } = render(
            <>
                <FontAwesomeLib />
                <IconButton icon={'male'} />
            </>
        )
        expect(getByTestId('IconButton')).toBeInTheDocument()
    });

    test('If not passed icon props, icon should not render', ()=> {
        const { getByTestId } = render(<IconButton />);
        expect(getByTestId('IconButton').querySelector('svg')).not.toBeInTheDocument();
    });
})