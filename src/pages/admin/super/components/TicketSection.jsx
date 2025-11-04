import React, { useState, useMemo } from 'react';
import {
  Ticket,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  MessageSquare,
  Calendar,
  User,
  Tag,
  ChevronRight,
} from 'lucide-react';
import TicketCard from './TicketCard';
import TicketStats from './TicketStats';

// Mock data for tickets
const demoTickets = [
  {
    id: 1,
    title: 'Problema di accesso al corso',
    description: 'Non riesco ad accedere al corso di sicurezza sul lavoro',
    status: 'aperto',
    priority: 'alta',
    type: 'Pagamenti/PayPal',
    author: 'Marco Rossi',
    authorEmail: 'marco.rossi@email.com',
    createdAt: '2024-11-01T10:30:00Z',
    updatedAt: '2024-11-01T10:30:00Z',
    assignedTo: null,
    comments: 2,
    category: 'Accesso Corsi',
  },
  {
    id: 2,
    title: 'Problema di accesso al corso',
    description: 'Errore durante il pagamento con PayPal',
    status: 'in_attesa',
    priority: 'media',
    type: 'Pagamenti/PayPal',
    author: 'Giulia Verdi',
    authorEmail: 'giulia.verdi@email.com',
    createdAt: '2024-10-30T15:45:00Z',
    updatedAt: '2024-10-31T09:20:00Z',
    assignedTo: 'Admin',
    comments: 5,
    category: 'Pagamenti',
  },
  {
    id: 3,
    title: 'Richiesta certificato',
    description: 'Necessito del certificato di completamento corso',
    status: 'chiuso',
    priority: 'bassa',
    type: 'Certificazioni',
    author: 'Paolo Bianchi',
    authorEmail: 'paolo.bianchi@email.com',
    createdAt: '2024-10-28T11:15:00Z',
    updatedAt: '2024-10-29T16:30:00Z',
    assignedTo: 'Admin',
    comments: 3,
    category: 'Certificazioni',
  },
  {
    id: 4,
    title: 'Corso approvato per pubblicazione',
    description: 'Il corso "Sicurezza Antincendio" è stato approvato',
    status: 'approvato',
    priority: 'media',
    type: 'Approvazione Corsi',
    author: 'Sistema',
    authorEmail: 'system@unosicurezza.com',
    createdAt: '2024-10-27T14:20:00Z',
    updatedAt: '2024-10-27T14:20:00Z',
    assignedTo: null,
    comments: 0,
    category: 'Corsi',
  },
];

export default function TicketSection({ activeTab = 'panoramica' }) {
  const [tickets, setTickets] = useState(demoTickets);

  // Filter tickets based on active tab
  const filteredTickets = useMemo(() => {
    switch (activeTab) {
      case 'aperti':
        return tickets.filter((t) => t.status === 'aperto');
      case 'chiusi':
        return tickets.filter((t) => t.status === 'chiuso');
      case 'attesa':
        return tickets.filter((t) => t.status === 'in_attesa');
      case 'approvati':
        return tickets.filter((t) => t.status === 'approvato');
      case 'panoramica':
      default:
        return tickets;
    }
  }, [tickets, activeTab]);

  const handleUpdateTicket = (ticketId, updates) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
          : ticket,
      ),
    );
  };

  const handleDeleteTicket = (ticketId) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
  };

  if (activeTab === 'panoramica') {
    return (
      <div className="space-y-6">
        <TicketStats tickets={tickets} />

        {/* Recent Actions */}
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Azioni Richieste
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {tickets.slice(0, 3).map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`h-2 w-2 rounded-full ${ticket.status === 'aperto' ? 'bg-red-500' : ''} ${ticket.status === 'in_attesa' ? 'bg-orange-500' : ''} ${ticket.status === 'chiuso' ? 'bg-gray-400' : ''} ${ticket.status === 'approvato' ? 'bg-green-500' : ''} `}
                  />
                  <div>
                    <p className="font-medium text-gray-900">{ticket.title}</p>
                    <p className="text-sm text-gray-500">{ticket.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>
                    {new Date(ticket.createdAt).toLocaleDateString('it-IT')}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header with count */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {activeTab === 'aperti' &&
            `Tickets Aperti (${filteredTickets.length})`}
          {activeTab === 'chiusi' &&
            `Tickets Chiusi (${filteredTickets.length})`}
          {activeTab === 'attesa' &&
            `In Attesa di Approvazione (${filteredTickets.length})`}
          {activeTab === 'approvati' &&
            `Corsi Approvati (${filteredTickets.length})`}
        </h2>
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.length === 0 ? (
          <div className="py-12 text-center">
            <Ticket className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Nessun ticket
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Non ci sono ticket in questa categoria.
            </p>
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onUpdate={handleUpdateTicket}
              onDelete={handleDeleteTicket}
            />
          ))
        )}
      </div>
    </div>
  );
}
