import React, { RefObject, useRef } from 'react'
import { clearInput, isInputTextMatch } from '../input';
import { fireEvent, render, waitForElement,  } from '@testing-library/react'
import { debug } from 'console';


const Component = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <input ref={inputRef} data-testid="Input" value="example" />
    )
}

describe('isInputTextMatch helper', () => {
    test('If inputText is equal value should be true', () => {
        const match = isInputTextMatch('example', 'example');
        expect(match).toBeTruthy()
    });

    test('If inputText is not equal value should be false', () => {
        const match = isInputTextMatch('other', 'example');
        expect(match).toBeFalsy()
    });
})

describe('clearInput helper', () => {
    test('If used function, input value should be clear', async () => {
        const { findByTestId } = render(<Component />);
        // const input = findByTestId('Input')

        const inputNode = await waitForElement(() => 
            findByTestId('Input')
        )

        fireEvent.change(inputNode, {target: { value: "DUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUPA"}})
        
    });
})