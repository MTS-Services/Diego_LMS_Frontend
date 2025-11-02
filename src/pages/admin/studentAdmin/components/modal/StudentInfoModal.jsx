import React, { useEffect, useRef } from 'react'
import { LuArrowLeftToLine } from 'react-icons/lu'

const StudentInfoModal = ({ onClose }) => {
    const overlayRef = useRef(null)
    const dialogRef = useRef(null)

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose && onClose()
        }
        document.addEventListener('keydown', onKey)
        // focus the dialog when mounted
        const prev = document.activeElement
        dialogRef.current?.focus()
        return () => {
            document.removeEventListener('keydown', onKey)
            prev?.focus()
        }
    }, [onClose])

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) {
            onClose && onClose()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        console.log('Student info submit', data)
        onClose && onClose()
    }

    return (
        <div
            ref={overlayRef}
            onMouseDown={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6"
            aria-modal="true"
            role="dialog"
            aria-label="Informazioni personali"
        >
            <div
                ref={dialogRef}
                tabIndex={-1}
                className="bg-white rounded-2xl w-full max-w-3xl shadow-lg p-8 md:p-10 outline-none max-h-[85vh] overflow-y-auto relative"
            >
                {/* Top bar: back arrow + title */}
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={() => onClose && onClose()}
                        aria-label="Indietro"
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <LuArrowLeftToLine className="w-6 h-6 text-gray-700" />
                    </button>

                    <h3 className="text-2xl md:text-3xl font-semibold">Informazioni personali</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 pb-8">
                    <div>
                        <label className="block mb-2 text-base font-semibold text-[#252525]">Nome <span className="text-red-500">*</span></label>
                        <input
                            name="firstName"
                            placeholder="Inserisci il tuo nome..."
                            required
                            className="w-full rounded-xl bg-[#F1F9F6] placeholder:text-[#6B6B6B] p-4 h-14 border-none focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-base font-semibold text-[#252525]">Cognome <span className="text-red-500">*</span></label>
                        <input
                            name="lastName"
                            placeholder="Inserisci il tuo cognome..."
                            required
                            className="w-full rounded-xl bg-[#F1F9F6] placeholder:text-[#6B6B6B] p-4 h-14 border-none focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-base font-semibold text-[#252525]">Data di nascita <span className="text-red-500">*</span></label>
                        <input
                            name="birthDate"
                            placeholder="GG/MM/AAAA"
                            required
                            className="w-full rounded-xl bg-[#F1F9F6] placeholder:text-[#6B6B6B] p-4 h-14 border-none focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-base font-semibold text-[#252525]">Luogo di nascita (se estero, la nazione) <span className="text-red-500">*</span></label>
                        <input
                            name="birthPlace"
                            placeholder="Inserisci il luogo di nascita..."
                            required
                            className="w-full rounded-xl bg-[#F1F9F6] placeholder:text-[#6B6B6B] p-4 h-14 border-none focus:outline-none"
                        />
                    </div>

                    {/* Floating save button in bottom-right area of the form */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-full bg-[#73BFA1] text-white px-6 py-3 shadow-md hover:opacity-95"
                        >
                            Salva
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentInfoModal
