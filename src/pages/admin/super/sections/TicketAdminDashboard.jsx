import React, { useState } from 'react';
import TicketSection from '../components/TicketSection';

export default function TicketAdminDashboard() {
  const [activeTab, setActiveTab] = useState('panoramica');

  const tabs = [
    { id: 'panoramica', label: 'Panoramica' },
    { id: 'aperti', label: 'Tickets aperti' },
    { id: 'chiusi', label: 'Tickets chiusi' },
    { id: 'attesa', label: 'In attesa di approvazione' },
    { id: 'approvati', label: 'Corsi approvati' },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Gestione Ticket
          </h1>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 px-1 py-2 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <section>
          <TicketSection activeTab={activeTab} />
        </section>
      </div>
    </div>
  );
}
