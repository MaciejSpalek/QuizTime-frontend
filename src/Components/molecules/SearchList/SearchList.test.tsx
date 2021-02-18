import React from 'react';
import SearchList from './SearchList';
import { render } from '@testing-library/react';

describe('SearchList Component', () => {
    test('SearchList render with child', () => {
        const { getByTestId } = render(
            <SearchList>
                <div></div>
            </SearchList>
        );
        expect(getByTestId('SearchList')).toBeInTheDocument();
    });
});