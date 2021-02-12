import React from 'react';
import GlobalTemplate from './GlobalTemplate';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';

describe('GlobalTemplate component', ()=> {
    test('Component render', ()=> {
        const { getByTestId } = render(
            <Provider store={store}>
                <GlobalTemplate>
                    <div></div>
                </GlobalTemplate>
            </Provider>)
        expect(getByTestId('GlobalTemplate')).toBeInTheDocument();
    })
});