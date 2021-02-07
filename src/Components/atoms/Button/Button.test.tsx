import React from 'react';
import Button from './Button';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Button Component', ()=> {
    test('default button render', ()=> {
        const { getByTestId } = render(<Button> Click </Button>);
        expect(getByTestId('Button')).toBeInTheDocument();
    });

    test('spinner-button render', ()=> {
        const { getByTestId } = render(<Button isSpinner> Click </Button>);
        expect(getByTestId('Spinner-button')).toBeInTheDocument();
    });
});