import React from 'react';
import PageTemplate from './PageTemplate';
import { render } from '@testing-library/react';

describe('PageTemplate component', () => {
    test('Component render', () => {
        const { getByTestId } = render(
            <PageTemplate>
                <div></div>
            </PageTemplate>)
        expect(getByTestId('PageTemplate')).toBeInTheDocument();
    })
});