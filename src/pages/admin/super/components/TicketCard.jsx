import React from 'react';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  MessageSquare,
  User,
  Calendar,
  Tag,
  Trash2,
  Edit3,
  ExternalLink,
} from 'lucide-react';

const priorityColors = {
  bassa: 'bg-blue-100 text-blue-800 border-blue-200',
  media: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  alta: 'bg-red-100 text-red-800 border-red-200',
};

const statusColors = {
  aperto: 'bg-red-100 text-red-800',
  in_attesa: 'bg-orange-100 text-orange-800',
  chiuso: 'bg-gray-100 text-gray-800',
  approvato: 'bg-green-100 text-green-800',
};

const statusLabels = {
  aperto: 'Aperto',
  in_attesa: 'In Attesa',
  chiuso: 'Chiuso',
  approvato: 'Approvato',
};

export default function TicketCard({ ticket, onUpdate, onDelete }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleStatusChange = (newStatus) => {
    onUpdate(ticket.id, { status: newStatus });
  };

  const handleDelete = () => {
    if (window.confirm('Sei sicuro di voler eliminare questo ticket?')) {
      onDelete(ticket.id);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">
                #{ticket.id}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[ticket.status]} `}
              >
                {statusLabels[ticket.status]}
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${priorityColors[ticket.priority]} `}
              >
                {ticket.priority.charAt(0).toUpperCase() +
                  ticket.priority.slice(1)}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {ticket.title}
            </h3>
            <p className="mb-3 text-sm text-gray-600">{ticket.description}</p>
          </div>

          {/* Actions */}
          <div className="ml-4 flex items-center space-x-2">
            <button
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              title="Visualizza dettagli"
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              title="Modifica"
            >
              <Edit3 className="h-4 w-4" />
            </button>
            <button
              onClick={handleDelete}
              className="rounded-md p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
              title="Elimina"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{ticket.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="h-4 w-4" />
            <span>{ticket.type}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(ticket.createdAt)}</span>
          </div>
          {ticket.comments > 0 && (
            <div className="flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span>{ticket.comments} commenti</span>
            </div>
          )}
          {ticket.assignedTo && (
            <div className="flex items-center space-x-1">
              <AlertCircle className="h-4 w-4" />
              <span>Assegnato a: {ticket.assignedTo}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {ticket.status !== 'chiuso' && ticket.status !== 'approvato' && (
          <div className="flex items-center space-x-2 border-t border-gray-100 pt-2">
            {ticket.status === 'aperto' && (
              <>
                <button
                  onClick={() => handleStatusChange('in_attesa')}
                  className="inline-flex items-center rounded-md border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700 hover:bg-orange-100"
                >
                  <Clock className="mr-1 h-4 w-4" />
                  Metti in attesa
                </button>
                <button
                  onClick={() => handleStatusChange('chiuso')}
                  className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <CheckCircle2 className="mr-1 h-4 w-4" />
                  Chiudi
                </button>
              </>
            )}

            {ticket.status === 'in_attesa' && (
              <>
                <button
                  onClick={() => handleStatusChange('approvato')}
                  className="inline-flex items-center rounded-md border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100"
                >
                  <CheckCircle2 className="mr-1 h-4 w-4" />
                  Approva
                </button>
                <button
                  onClick={() => handleStatusChange('aperto')}
                  className="inline-flex items-center rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-100"
                >
                  Riapri
                </button>
              </>
            )}
          </div>
        )}

        {/* Reopening option for closed tickets */}
        {ticket.status === 'chiuso' && (
          <div className="flex items-center space-x-2 border-t border-gray-100 pt-2">
            <button
              onClick={() => handleStatusChange('aperto')}
              className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Riapri ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
