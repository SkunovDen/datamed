import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import App from '../components/app/App';


test('Nav to Data Input page', () => {
  render(<App />);
  // clic nav link to Data Input page
  const dataInputNavLinkElement = screen.getByText(/Data Input/i);
  userEvent.click(dataInputNavLinkElement)

  // find Upload button
  const uploadButtonElement = screen.getByText('Upload file');
  expect(uploadButtonElement).toBeInTheDocument();
})