import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { H3 } from '../ui/Heading';
import Input from '../ui/Input';

const EmailForm = ({
  navigatePath,
  heading = 'Enter your email',
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('📩 Submitted Email:', email);

    if (onSubmit) {
      onSubmit(email);
    }

    if (navigatePath) {
      navigate(navigatePath);
    }
  };

  return (
    <div className="mx-auto w-full">
      <div className="mx-auto grid h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="my-auto rounded-xl border border-gray-50 px-[92px]">
          <div className="flex justify-center text-center">
            <H3
              className="max-w-[482px] text-center"
              h3="Let's change the experience of learning something new."
            />
          </div>
          <div className="mx-auto max-w-md">
            <img
              className="h-auto w-full bg-cover object-cover"
              src="/image/icon/gmail.png"
              alt="Gmail Icon"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-auto flex w-full flex-col justify-center rounded-xl border border-gray-50 bg-[#F1F9F6] px-[92px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex justify-center text-center">
              <H3 className="text-center" h3={heading} />
            </div>

            <div className="mb-6">
              <Input
                name="email"
                type="email"
                placeholder="Type Your Email"
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#73BFA1] lg:w-[20%]"
              >
                Go ahead
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmailForm;
