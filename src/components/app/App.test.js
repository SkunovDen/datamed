import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders DataMed text', () => {
  render(<App />);

  const textElement = screen.getByText('DataMed');
  expect(textElement).toBeInTheDocument();
});


test('renders NavLinks', () => {
  render(<App />);

  const homeNavLinkElement = screen.getByText(/Home/i);
  expect(homeNavLinkElement).toBeInTheDocument();

  const dataInputNavLinkElement = screen.getByText(/Data Input/i);
  expect(dataInputNavLinkElement).toBeInTheDocument();

  const tableViewNavLinkElement = screen.getByText(/Table View/i);
  expect(tableViewNavLinkElement).toBeInTheDocument();

  const htmlTableNavLinkElement = screen.getByText('***');
  expect(htmlTableNavLinkElement).toBeInTheDocument();
});

test('Nav to Data Input page', () => {
  render(<App />);
  // clic nav link to Data Input page
  const dataInputNavLinkElement = screen.getByText(/Data Input/i);
  userEvent.click(dataInputNavLinkElement)

  // find Upload button
  const uploadButtonElement = screen.getByText('Upload file');
  expect(uploadButtonElement).toBeInTheDocument();

})