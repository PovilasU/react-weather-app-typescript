import {render,screen} from '@testing-library/react';
import matchers from '@testing-library/jest-dom';
expect.extend(matchers);
import App from '../App';


it('Should have hello world', () => {
  render(<App />);
  const message = screen.queryByText(/Weather app/i);
  expect(message).toBeVisible();
});