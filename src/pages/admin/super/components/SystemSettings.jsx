import React, { useState } from 'react';
import { Pencil } from 'lucide-react';

export default function SystemSettings({
  initial = {
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    from: 'noreply@platform.com',
  },
}) {
  const [form, setForm] = useState(initial);
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const templates = [
    'Email di benvenuto',
    'Reimpostazione password',
    'Completamento del corso',
    'Conferma del pagamento',
    'Avviso di scadenza della licenza',
  ];

  return (
    <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="SMTP Server">
          <Input
            value={form.smtpServer}
            onChange={(e) => set('smtpServer', e.target.value)}
          />
        </Field>
        <Field label="SMTP Port">
          <Input
            value={form.smtpPort}
            onChange={(e) => set('smtpPort', e.target.value)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Da indirizzo email">
          <Input
            value={form.from}
            onChange={(e) => set('from', e.target.value)}
          />
        </Field>
      </div>

      <div className="mt-6 space-y-3">
        <Label>Tipo di piano</Label>
        {templates.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-3"
          >
            <span className="text-sm text-gray-800">{t}</span>
            <button className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Edit <Pencil className="h-4 w-4" />
            </button>
          </div>
        ))}
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
