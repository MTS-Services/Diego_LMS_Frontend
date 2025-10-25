import { useTranslation } from 'react-i18next';

const CoursesView = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>[TEACHER] Courses View</p>
      <p className="text-xl">{t('welcome')}</p>
    </div>
  );
};

export default CoursesView;
