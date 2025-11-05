import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Heading, InputField, Label } from '../../components/ui';
import { loginUser } from '../../features/auth/authAPI';
import { ROLE_DASHBOARD_ROUTE } from '../../config/routes';
import { IoIosArrowBack } from 'react-icons/io';

const RegisterView = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const otpRefs = useRef([]);

  //  Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (step === 1) {
      if (!email.trim()) {
        setError('Please enter your email.');
        return;
      }
      setError(null);
      setStep(2);
      console.log('📩 Email captured:', email);
      return;
    }

    // Step 2: OTP verification
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter the full 6-digit OTP.');
      return;
    }

    setLoading(true);
    dispatch(loginUser({ email, otp: otpValue }))
      .unwrap()
      .then((user) => {
        console.log('✅ Login successful:', user);
        const redirectPath = ROLE_DASHBOARD_ROUTE[user.role] || '/dash';
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => {
        setError(err.message || 'OTP verification failed');
        console.log('❌ Login failed:', err);
      })
      .finally(() => setLoading(false));
  };

  // 🔙 Handle going back
  const handleBack = () => {
    setStep(1);
    setOtp(new Array(6).fill(''));
  };

  // ✍️ Handle OTP input
  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="mx-auto w-full">
      <div className="mx-auto grid h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="my-auto rounded-xl">
          <div className="flex justify-center text-center">
            <div className="flex items-center">
              <img
                className="h-10 w-10 object-contain"
                src="/images/icons/title.png"
                alt="Home"
              />
              <h1 className="text-3xl font-bold text-gray-900">UnoSicurezza</h1>
            </div>
          </div>

          <div className="mx-auto max-w-md transition-all duration-300">
            <img
              className="h-auto w-full object-cover"
              src={
                step === 2 ? '/image/icon/otp.png' : '/image/icon/password.jpg'
              }
              alt={step === 2 ? 'OTP Icon' : 'Email Icon'}
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
                h3={
                  step === 2
                    ? 'Enter the OTP sent to your email'
                    : 'Enter your email'
                }
              />
            </div>

            {/* Step 1: Email */}
            {step === 1 && (
              <div className="mb-6 transition-all duration-300">
                <Label
                  htmlFor="email"
                  required
                  className="mb-2 block text-xl font-medium"
                >
                  E-mail
                </Label>
                <InputField
                  name="email"
                  type="email"
                  title="Email"
                  value={email}
                  placeholder="Type Your Email"
                  className="rounded-2xl border border-green-100 bg-white px-4 py-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <div className="mt-2 text-sm text-red-600">{error}</div>
                )}
              </div>
            )}

            {/* Step 2: OTP */}
            {step === 2 && (
              <div className="mb-6 transition-all duration-300">
                <div>
                  <p className="mb-4 text-center text-gray-600">
                    An OTP has been sent to <strong>{email}</strong>
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="h-12 w-12 rounded-xl border border-green-100 bg-white text-center text-xl font-medium focus:border-green-400 focus:outline-none"
                    />
                  ))}
                </div>
                {error && (
                  <div className="mt-3 text-center text-sm text-red-600">
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1 rounded-full border-2 border-gray-100 bg-white px-4 py-3 font-medium text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <IoIosArrowBack /> Back
                </button>
              )}

              <button
                type="submit"
                disabled={loading}
                className="rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#73BFA1] lg:w-[30%]"
              >
                {loading
                  ? 'Loading...'
                  : step === 2
                    ? 'Verify OTP'
                    : 'Go ahead'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
