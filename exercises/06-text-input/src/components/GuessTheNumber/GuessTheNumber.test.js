import { render, fireEvent } from '@testing-library/react';
import GuessTheNumber from './GuessTheNumber';
import '@testing-library/jest-dom'




test('renders GuessTheNumber component', () => {
    const { container } = render(<GuessTheNumber />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
});



test('handles empty input', () => {
    render(<GuessTheNumber />);

    const button = document.querySelector('button');
    fireEvent.click(button);

    const message = document.querySelector('p');
    expect(message.textContent).toBe('Please enter a number!');
});






