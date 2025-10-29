import Container from '../../../components/common/Container';
import Heading from '../../../components/ui/typography/Heading';
import Paragraph from '../../../components/ui/typography/Paragraph';
import CardSection from './components/CardSection';
import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <CardSection />
      <ReviewSection />
    </>
  );
};

export default HomeView;
