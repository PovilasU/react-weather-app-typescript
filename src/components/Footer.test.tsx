import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    // Add additional assertions for your footer content here
  });
});

