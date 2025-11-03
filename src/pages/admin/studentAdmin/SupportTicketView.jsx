import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCloudUploadAlt } from 'react-icons/fa'
import { Button } from '../../../components/ui'

const SupportTicketView = () => {
    const navigate = useNavigate()
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const maxChars = 2000

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.size <= 20 * 1024 * 1024) {
            setFile(selectedFile)
        } else {
            alert('Il file deve essere massimo 20 MB')
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files[0]
        if (droppedFile && droppedFile.size <= 20 * 1024 * 1024) {
            setFile(droppedFile)
        } else {
            alert('Il file deve essere massimo 20 MB')
        }
    }

    const handleSubmit = () => {
        if (!subject.trim() || !description.trim()) {
            alert('Compilare tutti i campi obbligatori')
            return
        }

        console.log({ subject, description, file })
        alert('Ticket inviato con successo!')
        navigate(-1)
    }

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    {/* Header with back button */}
                    <div className="relative flex items-center justify-center mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-0 text-gray-600 hover:text-gray-900 transition"
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-900">Apri un ticket</h1>
                    </div>

                    {/* Subject Field */}
                    <div className="mb-6">
                        <label className="block text-xl font-semibold text-gray-900 mb-2">
                            Oggetto<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Inserisci una breve descrizione"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-4 py-3 bg-[#F6FBF9] border border-[#E5F5ED] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73BFA1] focus:border-transparent"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-6">
                        <label className="block text-xl font-semibold text-gray-900 mb-2">
                            Descrizione<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Descrivi quale problema hai riscontrato"
                            value={description}
                            onChange={(e) => {
                                if (e.target.value.length <= maxChars) {
                                    setDescription(e.target.value)
                                }
                            }}
                            rows={5}
                            className="w-full px-4 py-3 bg-[#F6FBF9] border border-[#E5F5ED] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73BFA1] focus:border-transparent resize-none"
                        />
                        <div className="text-right text-xs text-gray-500 mt-1">
                            {description.length}/{maxChars}
                        </div>
                    </div>

                    {/* File Upload Area */}
                    <div className="mb-8">
                        <div
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            className="relative border-2 border-dashed border-[#C5E8D9] bg-[#F6FBF9] rounded-lg p-8 text-center"
                        >
                            <input
                                type="file"
                                id="fileUpload"
                                onChange={handleFileChange}
                                className="hidden"
                                accept="*"
                            />
                            <label htmlFor="fileUpload" className="cursor-pointer">
                                <div className="flex flex-col items-center">
                                    <FaCloudUploadAlt className="text-[#73BFA1] text-4xl mb-3" />
                                    <p className="text-sm font-medium text-gray-900 mb-1">
                                        Allega dei file
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Trascina e rilascia oppure{' '}
                                        <span className="text-[#73BFA1] underline">clicca qui</span> per
                                        caricare i file
                                    </p>
                                </div>
                            </label>
                            {file && (
                                <div className="mt-4 text-sm text-gray-700">
                                    File selezionato: <span className="font-medium">{file.name}</span>
                                </div>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            Dimensioni massima permessa: massimo 20 MB per allegato
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4">
                        <Button
                            label="Annulla"
                            variant="outline"
                            className="rounded-full border-red-400 text-red-500 hover:bg-red-50"
                            onClick={handleCancel}
                        />
                        <Button
                            label="Invia"
                            className="rounded-full bg-[#73BFA1] hover:bg-[#5fa488]"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportTicketView
