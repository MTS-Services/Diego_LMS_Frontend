import Paragraph from '../../../../components/ui/typography/Paragraph';
import Heading from '../../../../components/ui/typography/Heading';
import Button from '../../../../components/ui/buttons/Buttons';
import Container from '../../../../components/ui/layouts/Container';

const HeroSection = () => {
  return (
    <Container size="full">
      <div className="order-2 md:order-1">
        <Heading level={1}>UnoSicurezza</Heading>
        <Heading level={3} className="mt-8 mb-2">
          Ogni nuova competenza è un passo avanti verso il successo.
        </Heading>
        <Paragraph>Essere in regola è: proteggere chi lavora con te.</Paragraph>
        <Paragraph className="my-8">Scegli la sicurezza, scegli noi.</Paragraph>
        <Button label="Esplora i nostri servizi" variant="primary" size="lg" />
      </div>
    </Container>
  );
};

export default HeroSection;
