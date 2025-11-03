import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authAPI';

import {
  Button,
  Container,
  FormWrapper,
  Heading,
  InputField,
  Label,
  Paragraph,
} from '../../components/ui';

const LoginView = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  // grab loading and error states from redux
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <Container className="flex min-h-screen items-center justify-center bg-gray-50">
      <FormWrapper
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
      >
        <Heading
          level={2}
          className="mb-2 text-center text-2xl font-bold text-gray-800"
        >
          Welcome Back
        </Heading>
        <Paragraph className="mb-4 text-center text-sm text-gray-500">
          Please log in to continue
        </Paragraph>

        <div>
          <Label required htmlFor="email">
            Email
          </Label>
          <InputField
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label required htmlFor="password">
            Password
          </Label>
          <InputField
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          label={loading ? 'Logging in...' : 'Login'}
          variant="primary"
          className="rounded-md"
          disabled={loading}
        />

        {error && (
          <Paragraph className="mt-2 text-center text-sm text-red-500">
            {error}
          </Paragraph>
        )}

        {isAuthenticated && (
          <Paragraph className="mt-2 text-center text-sm text-green-600">
            Login successful!
          </Paragraph>
        )}

        <Paragraph className="mt-3 text-center text-sm text-gray-500">
          Don’t have an account?{' '}
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </Paragraph>
      </FormWrapper>
    </Container>
  );
};

export default LoginView;
