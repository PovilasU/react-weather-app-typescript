import { render, screen } from '@testing-library/react';
import About from '../components/About';

it('renders the About component', () => {
  render(<About />);
  
  const heading = screen.getByRole('heading', { name: /About/i });
  expect(heading).toBeInTheDocument();

  const paragraph = screen.getByText(/This is the About component./i);
  expect(paragraph).toBeInTheDocument();
});