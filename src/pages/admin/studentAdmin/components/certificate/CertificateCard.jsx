import React from 'react'
import { LuPrinter, LuDownload } from 'react-icons/lu'
import Button from '../../../../../components/ui/buttons/Buttons'
import { Paragraph, Heading } from '../../../../../components/ui'

const CertificateCard = ({ certificate }) => {
    const handlePrint = () => {
        window.print()
    }

    const handleDownload = () => {
        // Create a temporary link element
        const link = document.createElement('a')
        link.href = certificate.imageUrl || '/image/mandatory_courses/image1.jpg'
        link.download = `certificate-${certificate.courseTitle.replace(/\s+/g, '-').toLowerCase()}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10 mb-6">
            {/* Course title */}
            <Heading level={3} className="text-2xl font-semibold text-[#252525] mb-4">
                {certificate.courseTitle}
            </Heading>

            {/* Certificate preview image - smaller */}
            <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden max-w-[610px] mx-auto h-96">
                <img
                    src={certificate.imageUrl || '/image/mandatory_courses/image1.jpg'}
                    alt={`Certificate for ${certificate.courseTitle}`}
                    className="w-full h-auto"
                    onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Certificate'
                    }}
                />
            </div>

            {/* Message */}
            <Paragraph variant="body" className="text-base text-[#252525] mb-4">
                {certificate.message || "Ce l'hai fatta! Il tuo attestato è pronto: clicca qui per scaricarlo."}
            </Paragraph>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-2 mr-24">
                <Button
                    onClick={handlePrint}
                    icon={<LuPrinter className="text-base" />}
                    label="Stampa"
                    variant="primary"
                    size="sm"
                    className="text-xl py-2 px-4"
                    aria-label="Print certificate"
                />

                <Button
                    onClick={handleDownload}
                    icon={<LuDownload className="text-base" />}
                    label="Scarica"
                    variant="primary"
                    size="sm"
                    className="text-xl py-2 px-4"
                    aria-label="Download certificate"
                />
            </div>
        </div>
    )
}

export default CertificateCard
