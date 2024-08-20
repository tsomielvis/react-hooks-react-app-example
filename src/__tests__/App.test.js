// src/components/TestComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  test('renders correctly and displays the correct text', () => {
    // Render the component
    render(<TestComponent />);

    // Find the element by test ID
    const element = screen.getByTestId('test-component');

    // Assert that the element is in the document
    expect(element).toBeInTheDocument();

    // Assert that the element contains the expected text
    expect(element).toHaveTextContent('This is the TestComponent.');
  });
});
