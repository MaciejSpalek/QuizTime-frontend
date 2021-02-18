import React from 'react';
import Template from 'templates/UniversalTemplate';
import { render } from '@testing-library/react';

describe('Template component', () => {
    test(' It renders PageTemplate ', () => {
        const { getByTestId } = render(
            <Template>
                <div></div>
            </Template>)
        expect(getByTestId('PageTemplate')).toBeInTheDocument();
    })

    test(' It renders MainTemplate ', () => {
        const { getByTestId } = render(
            <Template isMain>
                <div></div>
            </Template>)
        expect(getByTestId('MainTemplate')).toBeInTheDocument();
    })

    test(' It renders WrapperTemplate ', () => {
        const { getByTestId } = render(
            <Template isWrapper>
                <div></div>
            </Template>)
        expect(getByTestId('WrapperTemplate')).toBeInTheDocument();
    })

    test(' It renders PlaceholderTemplate ', () => {
        const { getByTestId } = render(
            <Template isPlaceholder>
                <div></div>
            </Template>)
        expect(getByTestId('PlaceholderTemplate')).toBeInTheDocument();
    })
});