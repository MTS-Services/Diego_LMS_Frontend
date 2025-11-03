import React, { useState, useEffect } from 'react';

const LicenseComponent = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLicenses();
  }, []);

  const fetchLicenses = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('/api/licenses');

      if (!response.ok) {
        throw new Error('Failed to fetch licenses');
      }

      const data = await response.json();
      setLicenses(data);
    } catch (err) {
      console.error(err);
      // Mock data for demonstration
      setLicenses([
        {
          id: 1,
          name: 'Henry, Arthur',
          role: 'Freelancer',
          expiryDate: '2025-12-31',
          status: 'active',
        },
        {
          id: 2,
          name: 'Henry, Arthur',
          role: 'Freelancer',
          expiryDate: '2025-09-31',
          status: 'expiring',
        },
        {
          id: 3,
          name: 'Henry, Arthur',
          role: 'Freelancer',
          expiryDate: '2025-08-31',
          status: 'expired',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status === 'active') return 'text-[#73BFA1]';
    if (status === 'expiring') return 'text-orange-500';
    if (status === 'expired') return 'text-red-600';
    return 'text-gray-500';
  };

  const getStatusDotColor = (status) => {
    if (status === 'active') return 'bg-[#73BFA1]';
    if (status === 'expiring') return 'bg-[#f97316]';
    if (status === 'expired') return 'bg-[#c43216]';
    return 'bg-gray-500';
  };

  const getButtonColor = (status) => {
    if (status === 'expiring') return 'bg-[#f97316] hover:bg-orange-600';
    if (status === 'expired') return 'bg-[#c43216] hover:bg-red-700';
    return 'bg-[#73BFA1] hover:bg-[#5fa889]';
  };

  const getExpiryText = (dateInput) => {
    const d = new Date(dateInput);
    if (Number.isNaN(d.getTime())) return 'Expiry date: —';

    return `Expiry date: ${d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })}`;
  };

  const getScadenzaText = (dateInput) => {
    const d = new Date(dateInput);
    if (Number.isNaN(d.getTime())) return 'Scadenza: —';

    return `Scadenza: ${d.toLocaleDateString('it-IT')}`;
  };

  const filteredLicenses = licenses.filter((license) => {
    if (activeTab === 'active') return license.status === 'active';
    if (activeTab === 'expiring') return license.status === 'expiring';
    if (activeTab === 'expired') return license.status === 'expired';
    return true;
  });

  if (loading) {
    return (
      <div className="w-full p-6">
        <div className="animate-pulse">
          <div className="mb-6 h-8 w-48 rounded bg-gray-200"></div>
          <div className="h-40 rounded bg-gray-200"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 w-full rounded-xl bg-white p-6 shadow-sm">
      {/* Header */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Le tue licenze</h2>

      {/* Tabs */}
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setActiveTab('active')}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
            activeTab === 'active'
              ? 'bg-[#73BFA1] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Licenze attive
        </button>
        <button
          onClick={() => setActiveTab('expiring')}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
            activeTab === 'expiring'
              ? 'bg-[#f97316] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Licenze in scadenza
        </button>
        <button
          onClick={() => setActiveTab('expired')}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
            activeTab === 'expired'
              ? 'bg-[#c43216] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Licenze scadute
        </button>
      </div>

      {/* License Cards */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredLicenses.map((license) => (
          <div
            key={license.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {license.name}
            </h3>
            <p className="mb-2 text-sm font-medium text-gray-700">
              {license.role}
            </p>
            <div className="mb-4 flex items-center gap-2">
              <p className={`text-sm ${getStatusColor(license.status)}`}>
                {license.status === 'active' &&
                  getScadenzaText(license.expiryDate)}
                {license.status !== 'active' &&
                  getExpiryText(license.expiryDate)}
              </p>
              <div
                className={`h-2 w-2 rounded-full ${getStatusDotColor(license.status)}`}
              ></div>
            </div>
            {license.status !== 'active' && (
              <button
                className={`rounded-full px-6 py-3 text-sm font-medium text-white transition-colors ${getButtonColor(
                  license.status,
                )}`}
              >
                Renew the license
              </button>
            )}
          </div>
        ))}
      </div>

      {filteredLicenses.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-500">Nessuna licenza trovata</p>
        </div>
      )}
    </div>
  );
};

export default LicenseComponent;
