import React from 'react';
import Toast from './Toast';
import store from 'redux/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import FontAwesomeLib from 'includes/FontAwesomeLib';
  
describe('Toast component', () => {
    test('Toast should render', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <>
                    <FontAwesomeLib />
                    <Toast />
                </>
            </Provider>
        )
        expect(getByTestId('Toast')).toBeInTheDocument();
    })
})
