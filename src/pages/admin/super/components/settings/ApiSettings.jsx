import React, { useState } from 'react';
import { Pencil } from 'lucide-react';

export default function ApiSettings({
  initial = {
    mailchimp: '',
    zapier: '',
    analytics: '',
    sms: '',
    webhooks: [
      { name: 'Registrazione utente', active: true },
      { name: 'Completamento del corso', active: true },
      { name: 'Pagamento riuscito', active: true },
      { name: 'Scadenza della licenza', active: true },
    ],
  },
}) {
  const [form, setForm] = useState(initial);
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200">
      <div className="space-y-5">
        <Row label="Mailchimp API Key" help="Marketing via e-mail">
          <Input
            value={form.mailchimp}
            onChange={(e) => set('mailchimp', e.target.value)}
          />
          <Button>Test</Button>
        </Row>

        <Row label="URL del webhook Zapier" help="Automazione">
          <Input
            value={form.zapier}
            onChange={(e) => set('zapier', e.target.value)}
          />
          <Button>Test</Button>
        </Row>

        <Row label="Chiave API di analisi" help="Google Analytics">
          <Input
            value={form.analytics}
            onChange={(e) => set('analytics', e.target.value)}
          />
          <Button>Test</Button>
        </Row>

        <Row label="API del gateway SMS" help="Notifiche">
          <Input
            value={form.sms}
            onChange={(e) => set('sms', e.target.value)}
          />
          <Button>Test</Button>
        </Row>

        <div className="pt-2">
          <p className="mb-3 text-sm font-medium text-gray-700">
            Webhook dell'endpoint
          </p>

          <div className="space-y-3">
            {form.webhooks.map((w, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-3"
              >
                <span className="text-sm text-gray-800">{w.name}</span>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                    Active
                  </span>
                  <button className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, help, children }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <div className="mt-2">{children[0]}</div>
      </div>
      <div className="flex items-end">{children[1]}</div>
      {help && <p className="col-span-full text-xs text-gray-500">{help}</p>}
    </div>
  );
}
function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
    />
  );
}
function Button({ children, ...p }) {
  return (
    <button
      {...p}
      className="rounded-md bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600"
    >
      {' '}
      {children}{' '}
    </button>
  );
}
