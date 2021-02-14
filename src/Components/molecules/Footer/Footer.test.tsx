import React from 'react';
import Footer from './Footer';
import { render } from '@testing-library/react';
import FontAwesomeLib from 'includes/FontAwesomeLib';

describe('Footer Component', () => {
    test('Footer render', () => {
        const { getByTestId } = render(
            <>
                <FontAwesomeLib />
                <Footer />
            </>
        );
        expect(getByTestId('Footer')).toBeInTheDocument();
    });
});