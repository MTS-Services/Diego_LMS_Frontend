import React, { useEffect, useRef } from 'react';
import { LuArrowLeftToLine } from 'react-icons/lu';

const StudentInfoModal = ({ onClose }) => {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose && onClose();
    };
    document.addEventListener('keydown', onKey);
    // focus the dialog when mounted
    const prev = document.activeElement;
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      prev?.focus();
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose && onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    console.log('Student info submit', data);
    onClose && onClose();
  };

  return (
    <div
      ref={overlayRef}
      onMouseDown={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      aria-modal="true"
      role="dialog"
      aria-label="Informazioni personali"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-lg outline-none md:p-10"
      >
        {/* Top bar: back arrow + title */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => onClose && onClose()}
            aria-label="Indietro"
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <LuArrowLeftToLine className="h-6 w-6 text-gray-700" />
          </button>

          <h3 className="text-2xl font-semibold md:text-3xl">
            Informazioni personali
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 pb-8">
          <div>
            <label className="mb-2 block text-base font-semibold text-[#252525]">
              Nome <span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              placeholder="Inserisci il tuo nome..."
              required
              className="h-14 w-full rounded-xl border-none bg-[#F1F9F6] p-4 placeholder:text-[#6B6B6B] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold text-[#252525]">
              Cognome <span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              placeholder="Inserisci il tuo cognome..."
              required
              className="h-14 w-full rounded-xl border-none bg-[#F1F9F6] p-4 placeholder:text-[#6B6B6B] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold text-[#252525]">
              Data di nascita <span className="text-red-500">*</span>
            </label>
            <input
              name="birthDate"
              placeholder="GG/MM/AAAA"
              required
              className="h-14 w-full rounded-xl border-none bg-[#F1F9F6] p-4 placeholder:text-[#6B6B6B] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-base font-semibold text-[#252525]">
              Luogo di nascita (se estero, la nazione){' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              name="birthPlace"
              placeholder="Inserisci il luogo di nascita..."
              required
              className="h-14 w-full rounded-xl border-none bg-[#F1F9F6] p-4 placeholder:text-[#6B6B6B] focus:outline-none"
            />
          </div>

          {/* Floating save button in bottom-right area of the form */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-[#73BFA1] px-6 py-3 text-white shadow-md hover:opacity-95"
            >
              Salva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentInfoModal;
