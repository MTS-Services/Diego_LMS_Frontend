import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../../components/ui/layouts/Card';
import { Heading, Paragraph } from '../../../components/ui';
import { FaChevronLeft } from 'react-icons/fa';
import CourseMain from './components/course/CourseMain';
import CourseProgram from './components/course/CourseProgram';

const CourseContentView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: fetch course details by id (use API or redux)
  const course = {
    id,
    title: 'Formazione SEVESO',
    video: '/image/mandatory_courses/image1.jpg',
    description:
      "Il D. lgs. 105/2015 art. 14 all'Appendice I dell'Allegato B, precisa al gestore come ottemperare in maniera organica e programmata agli obblighi di informazione, formazione, addestramento ed equipaggiamento ai fini della sicurezza...",
  };

  return (
    <div className="">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex h-8 w-8 items-center justify-center"
        aria-label="Back"
      >
        <FaChevronLeft />
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <CourseMain course={course} />

        <CourseProgram
          modules={[
            { id: 1, title: 'Class-1', time: '3 minuti', status: 'done' },
            { id: 2, title: 'Class-2', time: '10 minuti', status: 'done' },
            { id: 3, title: 'Class-3', time: '20 minuti', status: 'current' },
            { id: 4, title: 'Class-4', time: '30 minuti', status: 'upcoming' },
            { id: 5, title: 'Class-5', time: '30 minuti', status: 'upcoming' },
            { id: 6, title: 'Quiz-1', time: 'Start', status: 'upcoming' },
          ]}
          progress={28}
        />
      </div>
    </div>
  );
};

export default CourseContentView;
