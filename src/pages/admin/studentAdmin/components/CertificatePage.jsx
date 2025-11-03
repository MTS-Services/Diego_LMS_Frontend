import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import CertificateCard from './certificate/CertificateCard'
import EmptyCertificateState from './certificate/EmptyCertificateState'

const CertificatePage = () => {
    const navigate = useNavigate()

    // Example certificates data - replace with actual data from API/Redux
    const certificates = [
        {
            id: 1,
            courseTitle: 'Datore di lavoro (Nuovo) 16 ore',
            imageUrl: '/image/mandatory_courses/image1.jpg',
            message: "Ce l'hai fatta! Il tuo attestato è pronto: clicca qui per scaricarlo.",
        },
        {
            id: 2,
            courseTitle: 'Generale 4 Ore',
            imageUrl: '/image/mandatory_courses/image1.jpg',
            message: "Ce l'hai fatta! Il tuo attestato è pronto: clicca qui per scaricarlo.",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Back button */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        aria-label="Go back"
                        className="inline-flex items-center justify-center w-8 h-8"
                    >
                        <FaChevronLeft className="text-gray-700 text-lg" />
                    </button>
                </div>

                {/* Page title centered */}
                <h2 className="text-center text-2xl font-semibold text-[#252525] mb-12">
                    Elenco dei certificati
                </h2>

                {/* Render all certificates or empty state */}
                {certificates.length > 0 ? (
                    <>
                        {certificates.map((certificate) => (
                            <CertificateCard key={certificate.id} certificate={certificate} />
                        ))}

                        {/* Load more button */}
                        <div className="flex justify-center mt-8">
                            <button className="px-12 py-2.5 rounded-full bg-[#73BFA1] text-white text-xs font-normal hover:bg-[#5fa889] transition-colors">
                                Loadmore
                            </button>
                        </div>
                    </>
                ) : (
                    <EmptyCertificateState />
                )}
            </div>
        </div>
    )
}

export default CertificatePage