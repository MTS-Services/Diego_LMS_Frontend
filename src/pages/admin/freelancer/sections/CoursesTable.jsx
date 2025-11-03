import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { AiOutlineDelete } from 'react-icons/ai';
import { RiEdit2Line } from 'react-icons/ri';
import AggiungiModal from '../components/AggiungiModal';

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          name: 'Seveso Training',
          enrolledStudents: 101,
          progress: 99,
          status: 'Pubblicato'
        },
        {
          id: 2,
          name: 'General Training',
          enrolledStudents: 102,
          progress: 75,
          status: 'Pubblicato'
        },
        {
          id: 3,
          name: 'Cyber Security',
          enrolledStudents: 106,
          progress: 25,
          status: 'Pubblicato'
        },
        {
          id: 4,
          name: 'General Training',
          enrolledStudents: 0,
          progress: 0,
          status: 'Immatricolazione'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-[#73BFA1]';
    if (progress >= 50) return 'bg-[#73BFA1]';
    if (progress >= 25) return 'bg-[#73BFA1]';
    return 'bg-gray-300';
  };

  const getStatusColor = (status) => {
    if (status === 'Pubblicato') return 'bg-green-100 text-green-700';
    if (status === 'Immatricolazione') return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  if (loading) {
    return (
      <div className="w-full p-6">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-6 lg:py-10 bg-white rounded-xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-gray-900">I miei corsi</h2>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          {/* Add Course Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-full bg-[#73BFA1] px-6 py-3 text-sm font-medium text-white hover:bg-[#5fa889] transition-colors"
          >
            <Plus className="h-4 w-4" />
            Aggiungi nuovo corso
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden bg-white shadow-sm border border-gray-200">
        <table className="w-full">
          <thead className="bg-[#f0f0f0] border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Corso
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Corsisti iscritti
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Avanzamento
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Stato
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Azioni
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-base text-black font-medium">
                  {course.name}
                </td>
                <td className="px-6 py-4 text-sm text-black">
                  {course.enrolledStudents}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full ${getProgressColor(course.progress)} transition-all`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-700">
                      {course.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 transition-colors">
                      <RiEdit2Line className="h-4 w-4 lg:h-5 lg:w-5" />
                      
                    </button>
                    <button className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors">
                      
                      <AiOutlineDelete className='h-4 w-4 lg:h-5 lg:w-5' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AggiungiModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default CoursesTable;