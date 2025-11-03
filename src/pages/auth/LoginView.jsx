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
import EmailForm from '../../components/common/EmailForm';

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

  return <EmailForm heading="Write your email" />;
};

export default LoginView;
