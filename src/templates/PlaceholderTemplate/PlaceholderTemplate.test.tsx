import React from 'react';
import { render } from '@testing-library/react';
import PlaceholderTemplate from './PlaceholderTemplate';

describe('PlaceholderTemplate component', () => {
    test('Component render', () => {
        const { getByTestId } = render(
            <PlaceholderTemplate>
                <div></div>
            </PlaceholderTemplate>)
        expect(getByTestId('PlaceholderTemplate')).toBeInTheDocument();
    })
});