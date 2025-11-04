import ChooseLanguage from '../../../../components/common/ChooseLanguage';

const FreelancerLanguage = () => {
  const handleLanguageSelect = (language) => {
    console.log('Language selected:', language);
  };
  return <ChooseLanguage onSelectLanguage={handleLanguageSelect} />;
};

export default FreelancerLanguage;
