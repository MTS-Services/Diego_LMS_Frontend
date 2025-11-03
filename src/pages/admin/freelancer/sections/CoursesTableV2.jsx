import React, { useState, useEffect } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const CoursesTableV2 = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('/api/courses');
      
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      console.error(err);
      // Mock data for demonstration
      setCourses([
        {
          id: 1,
          title: 'TechCorp Training',
          publicationDate: 'GG/MM/AAAA',
          enrolled: 130,
          status: 'Pubblicato'
        },
        {
          id: 2,
          title: 'Healthcare Awareness',
          publicationDate: 'GG/MM/AAAA',
          enrolled: 583,
          status: 'Pubblicato'
        },
        {
          id: 3,
          title: 'Digital Marketing',
          publicationDate: 'GG/MM/AAAA',
          enrolled: 453,
          status: 'In approvazione'
        },
        {
          id: 4,
          title: 'Legal Learning',
          publicationDate: 'GG/MM/AAAA',
          enrolled: 0,
          status: 'Non approvato'
        },
        {
          id: 5,
          title: 'Manufacturing',
          publicationDate: 'GG/MM/AAAA',
          enrolled: 196,
          status: 'In immatricolazione'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status === 'Pubblicato') return 'bg-green-100 text-green-700';
    if (status === 'In approvazione') return 'bg-blue-100 text-blue-700';
    if (status === 'Non approvato') return 'bg-red-100 text-red-700';
    if (status === 'In immatricolazione') return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <h2 className="mb-6 text-3xl font-bold text-black">I miei corsi</h2>

      {/* Table */}
      <div className="overflow-hidden rounded-lg bg-white">
        <table className="w-full">
          <thead className="bg-[#f0f0f0]">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">
                Titolo corso
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">
                Data di pubblicazione
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">
                Iscritti
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">
                Stato
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">
                Azione
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-black">
                  {course.title}
                </td>
                <td className="px-6 py-4 text-sm text-black">
                  {course.publicationDate}
                </td>
                <td className="px-6 py-4 text-sm text-black">
                  {course.enrolled}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-700 transition-colors">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
          <div className="text-sm text-gray-600">
            Showing 5 of 5 licensees
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Precedente
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#73BFA1] text-sm font-medium text-white"
            >
              1
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
            >
              Prossimo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesTableV2;