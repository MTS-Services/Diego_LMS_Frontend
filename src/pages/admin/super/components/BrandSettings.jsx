import React, { useState } from 'react';

export default function BrandSettings({
  initial = {
    name: 'sunosicurezza.com',
    color: '#73BFA1',
    logo: null,
    allowRegistration: true,
    allowCertificates: false,
  },
}) {
  const [form, setForm] = useState(initial);
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Nome della piattaforma">
          <Input
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
          />
        </Field>

        <Field label="Colore primario">
          <div className="flex gap-2">
            <input
              type="color"
              value={form.color}
              onChange={(e) => set('color', e.target.value)}
              className="h-10 w-12 rounded border border-gray-200"
            />
            <Input
              value={form.color}
              onChange={(e) => set('color', e.target.value)}
            />
          </div>
        </Field>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Platform logo">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded bg-white text-xs text-gray-500 ring-1 ring-gray-200">
              {form.logo ? 'LOGO' : '—'}
            </div>
            <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm">
              Add logo
            </button>
          </div>
        </Field>
      </div>

      <div className="mt-6 space-y-3">
        <ToggleRow
          title="Nuove registrazioni utente"
          subtitle="Consenti ai nuovi utenti di registrarsi su tutti i tenant"
          checked={form.allowRegistration}
          onChange={(v) => set('allowRegistration', v)}
        />
        <ToggleRow
          title="Download dei certificati"
          subtitle="Consentire agli utenti di scaricare i certificati di completamento"
          checked={form.allowCertificates}
          onChange={(v) => set('allowCertificates', v)}
        />
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
function Label({ children }) {
  return <p className="text-sm font-medium text-gray-700">{children}</p>;
}
function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
    />
  );
}
function ToggleRow({ title, subtitle, checked, onChange }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-3">
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${checked ? 'bg-emerald-500' : 'bg-gray-300'}`}
      >
        <span
          className={`h-5 w-5 transform rounded-full bg-white shadow transition ${checked ? 'translate-x-8' : 'translate-x-2'}`}
        />
      </button>
    </div>
  );
}
