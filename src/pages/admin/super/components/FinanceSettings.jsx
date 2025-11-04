import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FinanceSettings({
  initialCurrency = 'EUR',
  initialTax = 0,
  initialGateways = { stripe: true, paypal: false },
  onChange = () => {},
}) {
  const [currency, setCurrency] = useState(initialCurrency);
  const [tax, setTax] = useState(initialTax);
  const [gateways, setGateways] = useState(initialGateways);

  const currencies = ['EUR', 'USD', 'GBP'];
  const taxRates = [0, 5, 10, 15, 20, 23];

  const setG = (k, v) => {
    const next = { ...gateways, [k]: v };
    setGateways(next);
    onChange({ currency, tax, gateways: next });
  };

  return (
    <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Divisa">
          <Select
            value={currency}
            onChange={(v) => {
              setCurrency(v);
              onChange({ currency: v, tax, gateways });
            }}
            options={currencies.map((c) => ({ label: c, value: c }))}
          />
        </Field>
        <Field label="Aliquota fiscale predefinita (%)">
          <Select
            value={tax}
            onChange={(v) => {
              setTax(Number(v));
              onChange({ currency, tax: Number(v), gateways });
            }}
            options={taxRates.map((t) => ({ label: `${t}%`, value: t }))}
          />
        </Field>
      </div>

      <div className="mt-6 space-y-3">
        <Label>Portale di pagamento</Label>
        <GatewayRow
          title="stripe"
          subtitle="Elaborazione delle carte di credito"
          checked={gateways.stripe}
          onToggle={(v) => setG('stripe', v)}
        />
        <GatewayRow
          title="PayPal"
          subtitle="Pagamenti PayPal"
          checked={gateways.paypal}
          onToggle={(v) => setG('paypal', v)}
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
function Select({ value, onChange, options }) {
  const current =
    options.find((o) => String(o.value) === String(value)) || options[0];
  return (
    <div className="relative w-full">
      <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800">
        {current.label}
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>
      <select
        className="absolute inset-0 h-full w-full opacity-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
function GatewayRow({ title, subtitle, checked, onToggle }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-3">
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onToggle(!checked)}
        className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${checked ? 'bg-emerald-500' : 'bg-gray-300'}`}
      >
        <span
          className={`h-5 w-5 transform rounded-full bg-white shadow transition ${checked ? 'translate-x-8' : 'translate-x-2'}`}
        />
      </button>
    </div>
  );
}
