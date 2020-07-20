import React from 'react';
import { render } from '@testing-library/react';
import Login from './components/body/Login/Login';

test('renders learn react link', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
