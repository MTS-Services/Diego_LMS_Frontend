import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="rounded-md bg-gray-200 px-3 py-1 hover:bg-gray-300"
    >
      {i18n.language === 'en' ? '🇧🇩 বাংলা' : '🇬🇧 English'}
    </button>
  );
}
