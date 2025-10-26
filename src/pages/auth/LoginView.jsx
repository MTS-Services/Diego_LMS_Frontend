import React, { useState } from 'react';
import {
  Button,
  FormWrapper,
  Heading,
  InputField,
  Label,
  Paragraph,
} from '../../components/ui';

const LoginView = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <section className="pt-20">
      <FormWrapper
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-4 space-y-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
      >
        <Heading
          level={2}
          className="mb-2 text-center text-2xl font-bold text-gray-800"
        >
          Welcome Back 👋
        </Heading>
        <Paragraph className="mb-4 text-center text-sm text-gray-500">
          Please log in to continue
        </Paragraph>
        <div>
          <Label>Email</Label>
          <InputField
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <InputField
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <Button type="submit" label="Login" variant="primary" />

        <p className="mt-3 text-center text-sm text-gray-500">
          Don’t have an account?{' '}
          <a href="/dash/super-admin" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </FormWrapper>
    </section>
  );
};

export default LoginView;
