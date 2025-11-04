import { useEffect, useState } from 'react';
import ServicesCategory from './components/ServicesCategory';
import BannerSection from './sections/BannerSection';

const ServicesView = () => {
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log('category', categories);

  useEffect(() => {
    const categoryData = async () => {
      try {
        setLoading(false);
        const data = await getData('category.json');
        setCategory(data || []);
      } catch (err) {
        console.log('', err);
      } finally {
        setLoading(false);
      }
    };
    categoryData();
  }, []);

  return (
    <>
      <BannerSection />
      <ServicesCategory loading={loading} categories={categories} />
    </>
  );
};

export default ServicesView;
