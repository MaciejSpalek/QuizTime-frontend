import React from 'react';
import Hamburger from './Hamburger';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';

describe('Hamburger component', () => {
    test('Render hamburger', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Hamburger />
            </Provider>
        )
        expect(getByTestId('Hamburger')).toBeInTheDocument()
    });
})