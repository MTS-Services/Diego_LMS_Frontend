import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../../components/ui/layouts/Card'
import { Heading } from '../../../components/ui'
import { FaChevronLeft, FaRegCopy } from 'react-icons/fa'

const CredentialsReceived = () => {
    const navigate = useNavigate()

    const credentials = {
        username: 'gladys512',
        password: 'B48sghjJckxwm',
        courseName: 'Seveso Training',
        sentBy: "Dall'amministratore dell'azienda",
    }

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            // small visual feedback could be added; keeping simple
            console.log('copied', text)
        } catch (e) {
            console.error('copy failed', e)
        }
    }

    return (
        <div className="p-6 md:p-10">
           

            <div className="max-w-3xl mx-auto">
                <Card>
                    <div className="px-4 py-6 md:px-8 md:py-10">
                         <button
                onClick={() => navigate(-1)}
                aria-label="Back"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm hover:bg-gray-50 mb-6"
            >
                <FaChevronLeft className="text-gray-600" />
            </button>
                        <Heading level={3} className="mb-6">
                            Nuove credenziali ricevute
                        </Heading>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Nome utente*</label>
                                <div className="flex items-center justify-between bg-[#f3faf6] rounded-md px-4 py-3">
                                    <span className="text-gray-700">{credentials.username}</span>
                                    <button
                                        onClick={() => copyToClipboard(credentials.username)}
                                        aria-label="Copia username"
                                        className="text-gray-600"
                                    >
                                        <FaRegCopy />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Password*</label>
                                <div className="flex items-center justify-between bg-[#f3faf6] rounded-md px-4 py-3">
                                    <span className="text-gray-700">{credentials.password}</span>
                                    <button
                                        onClick={() => copyToClipboard(credentials.password)}
                                        aria-label="Copia password"
                                        className="text-gray-600"
                                    >
                                        <FaRegCopy />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Nome del corso*</label>
                                <div className="bg-[#f3faf6] rounded-md px-4 py-3 text-gray-600">{credentials.courseName}</div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Invia da*</label>
                                <div className="bg-[#f3faf6] rounded-md px-4 py-3 text-gray-600">{credentials.sentBy}</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CredentialsReceived
