import React from 'react';
import Register from './register';
import { render, cleanup, fireEvent } from 'react-testing-library';

afterEach(cleanup);

describe('<Register/>', () => {
  // Register Unit-Test
  // ===================
  it('* Checks form elements availability and its initial value', () => {
    const { getByPlaceholderText } = render(<Register />);
    const username = getByPlaceholderText('Email');
    const password = getByPlaceholderText('Password');
    expect(username.textContent).toBe('');
    expect(password.textContent).toBe('');
  });

  // Register Integrated-Test
  // =========================
  it('* Checks if email and password are valid', () => {
    const { getByText, queryByTestId, getByPlaceholderText } = render(
      <Register />
    );

    const submitBtn = getByText('Submit');
    const email = getByPlaceholderText('Email');
    const password = getByPlaceholderText('Password');

    fireEvent.change(email, { target: { value: 'muhammad@email.com' } });
    fireEvent.change(password, { target: { value: '123456789' } });
    fireEvent.click(submitBtn);
    const error = queryByTestId('error');
    expect(error).toBeFalsy();
  });
});
