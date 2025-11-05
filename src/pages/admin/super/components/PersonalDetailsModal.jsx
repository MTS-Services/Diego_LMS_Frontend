import React, { useState } from 'react';
import {
  X,
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  User,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';

export default function PersonalDetailsModal({
  isOpen,
  onClose,
  company,
  onBack,
}) {
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock user data for the company
  const userData = {
    name: 'Franco rossi',
    email: 'kenzi.lawson@example.com',
    phone: '+39 123 456 7890',
    hireDate: '15/03/2022',
    status: 'Attivo',
    courses: [
      {
        id: 1,
        name: 'Formazione Sicurezza Lavoro Base',
        startDate: 'GG/MM/AAAA',
        endDate: 'GG/MM/AAAA',
        totalTime: '12h',
        score: '98%',
        feedback: 'GG/MM/AAAA',
        status: 'Completato',
      },
      {
        id: 2,
        name: 'Formazione Sicurezza Avanzata',
        startDate: 'GG/MM/AAAA',
        endDate: 'GG/MM/AAAA',
        totalTime: '20h',
        score: '98%',
        feedback: 'GG/MM/AAAA',
        status: 'Completato',
      },
      {
        id: 3,
        name: 'Cyber Security Fundamentals',
        startDate: 'GG/MM/AAAA',
        endDate: 'GG/MM/AAAA',
        totalTime: '18h',
        score: '92%',
        feedback: 'GG/MM/AAAA',
        status: 'Completato',
      },
      {
        id: 4,
        name: 'Formazione Primo Soccorso',
        startDate: 'GG/MM/AAAA',
        endDate: 'GG/MM/AAAA',
        totalTime: '22h',
        score: '93%',
        feedback: 'GG/MM/AAAA',
        status: 'Completato',
      },
    ],
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      Attivo: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      Completato: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'In Corso': 'bg-blue-100 text-blue-800 border-blue-200',
      'Non Iniziato': 'bg-gray-100 text-gray-800 border-gray-200',
    };

    return statusMap[status] || statusMap['Attivo'];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-4 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-2xl">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Personal details
              </h1>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* User Information Card */}
          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white">
                  {userData.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                    {userData.name}
                  </h2>
                  <div
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${getStatusBadge(userData.status)}`}
                  >
                    {userData.status}
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 transition-colors duration-200 hover:bg-emerald-100">
                  <Edit className="h-4 w-4" />
                  <span>Modifica</span>
                </button>
                <button className="flex items-center space-x-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-100">
                  <Trash2 className="h-4 w-4" />
                  <span>Elimina</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-medium text-gray-900">
                    {userData.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-600">Telefono</div>
                  <div className="font-medium text-gray-900">
                    {userData.phone}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-600">Assunzione</div>
                  <div className="font-medium text-gray-900">
                    {userData.hireDate}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Table */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Corsi Completati
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Course Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Start Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      End Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Total Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Total Scores
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Feedback Survey
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {userData.courses.map((course) => (
                    <tr
                      key={course.id}
                      className="transition-colors duration-150 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="max-w-[200px] truncate text-sm font-medium text-gray-900">
                          {course.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {course.startDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {course.endDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {course.totalTime}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="text-sm font-medium text-gray-900">
                            {course.score}
                          </div>
                          {parseInt(course.score) >= 95 && (
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {course.feedback}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            className="rounded-lg p-2 text-gray-400 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
                            title="Visualizza dettagli"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white transition-colors duration-200 hover:bg-emerald-600"
                            title="Completato"
                          >
                            <span className="text-xs font-bold">✓</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Statistics */}
          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <div>Mostra 4 di 16 corsisti</div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
                Precedente
              </button>
              <button className="h-8 w-8 rounded-lg bg-emerald-500 font-medium text-white">
                1
              </button>
              <button className="h-8 w-8 rounded-lg text-gray-700 hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
                Prossimo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
