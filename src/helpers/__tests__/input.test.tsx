import React, { RefObject, useRef } from 'react'
import { clearInput, isInputTextMatch } from '../input';
import { render } from '@testing-library/react'


const Component = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <input ref={inputRef} data-testid="Input" value="example" onChange={()=> {}}/>
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
    test('If used function, input value should be clear', () => {
        const { getByTestId } = render(<Component />)
        const inputRef = getByTestId("Input")
    });
})