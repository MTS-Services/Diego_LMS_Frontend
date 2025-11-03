import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Heading, InputField } from '../../components/ui';
import { loginUser } from '../../features/auth/authAPI';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 1) {
      if (!email.trim()) {
        setError('Please enter your email.');
        return;
      }
      // Move to password step
      setStep(2);
      console.log('📩 Email captured:', email);
    } else {
      // Step 2: submit password
      if (!password.trim()) {
        setError('Please enter your password.');
        return;
      }
      setLoading(true);
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          // Handle successful login
          console.log('✅ Login successful:', { email, password });
          navigate('/dash/super-admin');
        })
        .catch((err) => {
          // Handle login error
          setError(err);
          console.log('❌ Login failed:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleBack = () => {
    setStep(1);
    setPassword('');
  };

  return (
    <div className="mx-auto w-full">
      <div className="mx-auto grid h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="my-auto rounded-xl border border-gray-50">
          <div className="flex justify-center text-center">
            <div className="flex items-center">
              <img
                className="h-10 w-10 bg-cover object-contain text-[#46BB9D]"
                src="/images/icons/title.png"
                alt="Home"
              />
              <h1 className="text-3xl font-bold text-gray-900">UnoSicurezza</h1>
            </div>
          </div>

          <div className="mx-auto max-w-md transition-all duration-300">
            <img
              className="h-auto w-full bg-cover object-cover"
              src={
                step === 2
                  ? '/image/icon/password.jpg'
                  : '/image/icon/gmail.png'
              }
              alt={step === 2 ? 'Password Icon' : 'Gmail Icon'}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-auto flex w-full flex-col justify-center rounded-xl border border-gray-50 bg-[#F1F9F6] px-[92px] transition-all duration-300">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex justify-center text-center">
              <Heading
                level={3}
                className="text-center"
                h3={step === 2 ? 'Enter your password' : 'Enter your email'}
              />
            </div>

            {/* Step 1: Email Field */}
            {step === 1 && (
              <div className="mb-6 transition-all duration-300">
                <InputField
                  name="email"
                  type="email"
                  placeholder="Type Your Email"
                  title="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white"
                />

                {error && (
                  <div className="mt-2 text-sm text-red-600">{error}</div>
                )}
              </div>
            )}

            {/* Step 2: Password Field */}
            {step === 2 && (
              <div className="mb-6 transition-all duration-300">
                <InputField
                  name="password"
                  type="password"
                  placeholder="Type Your Password"
                  title="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white"
                />
                {error && (
                  <div className="mt-2 text-sm text-red-600">{error}</div>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-end gap-2">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="rounded-full border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-600 transition-colors hover:bg-gray-100"
                >
                  ← Back
                </button>
              )}

              <button
                type="submit"
                className="rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#73BFA1] lg:w-[30%]"
              >
                {step === 2 ? (
                  <>{loading ? 'Loading...' : 'Login'}</>
                ) : (
                  'Go ahead'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
