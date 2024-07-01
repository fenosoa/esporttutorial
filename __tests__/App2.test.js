import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
import {it} from '@jest/globals';

it('should find Welcome text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome')).toBeTruthy();
});

it('should find Say hello text', () => {
    const { getByText } = render(<App />);
    fireEvent.press(getByText('Say Hello'));
    expect(getByText('Hello')).toBeTruthy();
});


