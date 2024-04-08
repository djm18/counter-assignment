import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initcount = screen.getByTestId('count');
  const count0 = parseInt(initcount.textContent);
  
  fireEvent.click(screen.getByText('+'))
  const count = screen.getByTestId('count');
  
  expect(count).toHaveTextContent(count0+1);

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initcount = screen.getByTestId('count');
  const count0 = parseInt(initcount.textContent);
  
  fireEvent.click(screen.getByText('-'))
  const count = screen.getByTestId('count');
  
  expect(count).toHaveTextContent(count0-1);
});
