import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heading, Paragraph } from '../../components/ui';

const LANGUAGES = [
  { code: 'en', title: 'English', img: '/image/icon/lang-uk.png' },
  { code: 'it', title: 'Italiano', img: '/image/icon/lang-it.png' },
  { code: 'ar', title: 'العربية', img: '/image/icon/lang-ar.png' },
  { code: 'zh', title: '中文', img: '/image/icon/lang-cn.png' },
];

const ChooseLanguageView = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(i18n.language || 'it');

  useEffect(() => {
    setSelected(i18n.language);
  }, [i18n.language]);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setSelected(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/register');
  };

  return (
    <div className="mx-auto w-full">
      <div className="mx-auto grid h-screen grid-cols-1 gap-3 md:grid-cols-2">
        {/* Left Section */}
        <div className="my-auto px-[92px]">
          <div className="flex justify-center text-center">
            <Heading level={3} className="text-center">
              Let's change the experience of learning <br /> something new.
            </Heading>
          </div>
          <div className="mx-auto w-full lg:w-[500px]">
            <img
              className="h-auto w-full object-cover"
              src="/image/icon/authentication.jpg"
              alt="Learning illustration"
            />
          </div>
          <Paragraph className="text-center">
            Our journey to ensure quality education for all at low cost.
          </Paragraph>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center rounded-xl border border-gray-100 bg-[#F1F9F6] px-[22px] py-[48px] md:px-[28px] lg:px-[92px]"
        >
          <div className="flex justify-center text-center">
            <Heading
              level={3}
              className="mb-6 text-center sm:mb-8 md:mb-12"
              h3="Choose a preferred language"
            />
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-5 md:gap-7">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`relative h-36 rounded-2xl border-2 bg-white p-5 transition-all sm:h-40 md:h-48 ${
                  selected === lang.code
                    ? 'border-emerald-400 '
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Checkmark */}
                <div className="absolute top-3 right-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      selected === lang.code ? 'bg-emerald-400' : 'bg-gray-200'
                    }`}
                  >
                    {selected === lang.code && (
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Flag and Title */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={lang.img}
                    alt={lang.title}
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  {lang.title}
                </h4>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-full border-2 border-[#73BFA1] bg-[#73BFA1] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#73BFA1] lg:w-[30%]"
            >
              Go ahead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChooseLanguageView;
