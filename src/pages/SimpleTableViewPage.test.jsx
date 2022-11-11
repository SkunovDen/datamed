import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import App from '../components/app/App';

test('Nav to Table View page', () => {
  render(<App />);

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  
  // click nav link to Table View page
  const simpleTableViewNavLinkElement = screen.getByText('***');
  expect(simpleTableViewNavLinkElement).toBeInTheDocument();

  userEvent.click(simpleTableViewNavLinkElement)

//   await tick();

  // find table cell content
  const simpleTableElement = screen.getByText('APERIODC');
  expect(simpleTableElement).toBeInTheDocument();
})