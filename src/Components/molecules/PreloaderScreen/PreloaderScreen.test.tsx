import React from 'react';
import PreloaderScreen from './PreloaderScreen';
import { render } from '@testing-library/react';

describe('PreloaderScreen Component', () => {
    test('PreloaderScreen render', () => {
        const { getByTestId } = render(<PreloaderScreen />);
        expect(getByTestId('PreloaderScreen')).toBeInTheDocument();
    });
});