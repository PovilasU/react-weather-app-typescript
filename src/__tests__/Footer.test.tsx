// create test for Footer component
import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";

it("renders the Footer component", () => {
  render(<Footer />);
  const paragraph = screen.getByText(/Author: Povilas Urbonas/i);
  expect(paragraph).toBeInTheDocument();
});

