import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CertificateCard from './certificate/CertificateCard';
import EmptyCertificateState from './certificate/EmptyCertificateState';
import { Container } from '../../../../components/ui';

const CertificatePage = () => {
  const navigate = useNavigate();

  // Example certificates data - replace with actual data from API/Redux
  const certificates = [
    {
      id: 1,
      courseTitle: 'Datore di lavoro (Nuovo) 16 ore',
      imageUrl: '/image/mandatory_courses/image1.jpg',
      message:
        "Ce l'hai fatta! Il tuo attestato è pronto: clicca qui per scaricarlo.",
    },
    {
      id: 2,
      courseTitle: 'Generale 4 Ore',
      imageUrl: '/image/mandatory_courses/image1.jpg',
      message:
        "Ce l'hai fatta! Il tuo attestato è pronto: clicca qui per scaricarlo.",
    },
  ];

  return (
    <Container size="full" className="">
      <div className="">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="inline-flex h-8 w-8 items-center justify-center"
          >
            <FaChevronLeft className="text-lg text-gray-700" />
          </button>
        </div>

        {/* Page title centered */}
        <h2 className="mb-12 text-center text-2xl font-semibold text-[#252525]">
          Elenco dei certificati
        </h2>

        {/* Render all certificates or empty state */}
        {certificates.length > 0 ? (
          <>
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}

            {/* Load more button */}
            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-[#73BFA1] px-12 py-2.5 text-xs font-normal text-white transition-colors hover:bg-[#5fa889]">
                Loadmore
              </button>
            </div>
          </>
        ) : (
          <EmptyCertificateState />
        )}
      </div>
    </Container>
  );
};

export default CertificatePage;
