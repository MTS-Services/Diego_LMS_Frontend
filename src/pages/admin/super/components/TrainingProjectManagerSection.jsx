// src/components/admin/super/sections/TrainingProjectManagerSection.jsx
import React, { useRef, useState } from 'react';
import { UploadCloud, Download } from 'lucide-react';

export default function TrainingProjectManagerSection({
  initial,
  onUpload,
  onDownload,
}) {
  // default values if nothing is passed
  const safeInitial = initial || {
    nome: '',
    cognome: '',
    files: {},
  };

  const [form, setForm] = useState({
    nome: safeInitial.nome,
    cognome: safeInitial.cognome,
  });

  const [files, setFiles] = useState(safeInitial.files);

  // list of required documents
  const docList = [
    { key: 'cv', label: 'Curriculum' },
    { key: 'id_cf', label: "Carta d'identità e Codice Fiscale" },
    {
      key: 'safety_exp',
      label: 'Certificati/Prova di Esperienza in Salute e Sicurezza',
    },
    { key: 'digital_skill', label: 'Certificati di Competenze Digitali' },
  ];

  const handleUpload = async (key, file) => {
    // optimistic UI
    setFiles((prev) => ({
      ...prev,
      [key]: { name: file.name },
    }));

    if (typeof onUpload === 'function') {
      try {
        const res = await onUpload(key, file); // expect { name?, url? }
        setFiles((prev) => ({
          ...prev,
          [key]: {
            name: (res && res.name) || file.name,
            url: res && res.url,
          },
        }));
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }
  };

  const handleDownload = (key) => {
    const meta = files && files[key];
    if (!meta || !meta.name) return;
    if (typeof onDownload === 'function') {
      onDownload(key, meta);
    } else if (meta.url) {
      // basic client-side open
      window.open(meta.url, '_blank');
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      {/* Top header */}
      <div className="mb-5 rounded-xl bg-slate-900 px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/9.x/thumbs/svg?seed=PM"
            className="h-8 w-8 rounded-full ring-1 ring-white/20"
            alt="avatar"
          />
          <div>
            <h2 className="text-lg font-semibold">
              Responsabile del progetto di formazione
            </h2>
            <p className="text-xs text-white/80">
              Responsabile Progetto Formativo
            </p>
          </div>
        </div>
      </div>

      {/* Name fields */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Nome">
          <input
            value={form.nome}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, nome: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder="Nome"
          />
        </Field>
        <Field label="Nome">
          <input
            value={form.cognome}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, cognome: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder="Nome"
          />
        </Field>
      </div>

      <h3 className="mt-6 text-base font-semibold text-gray-900">
        Documenti richiesti
      </h3>

      <div className="mt-3 space-y-4">
        {docList.map((doc) => (
          <DocCard
            key={doc.key}
            label={doc.label}
            fileMeta={files ? files[doc.key] : null}
            onUpload={(file) => handleUpload(doc.key, file)}
            onDownload={() => handleDownload(doc.key)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- small helper components (no TS) ---------- */

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-800">{label}</p>
      {children}
    </div>
  );
}

function DocCard({ label, fileMeta, onUpload, onDownload }) {
  const inputRef = useRef(null);
  const hasFile = !!(fileMeta && fileMeta.name);
  const statusText = hasFile ? fileMeta.name : 'Nessun caricamento file';

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onUpload(file);
    }
    // reset input so you can upload same file again
    e.target.value = '';
  };

  return (
    <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
      <p className="mb-2 text-sm font-medium text-gray-800">{label}</p>

      {/* current file */}
      <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
        {statusText}
      </div>

      {/* buttons */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => inputRef.current && inputRef.current.click()}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          <UploadCloud className="h-4 w-4" />
          Carica file
        </button>

        <button
          type="button"
          onClick={onDownload}
          disabled={!hasFile}
          className={
            'inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ' +
            (hasFile
              ? 'border-emerald-300 text-emerald-700 hover:bg-emerald-50'
              : 'cursor-not-allowed border-gray-200 text-gray-400')
          }
        >
          <Download className="h-4 w-4" />
          Scarica file
        </button>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
