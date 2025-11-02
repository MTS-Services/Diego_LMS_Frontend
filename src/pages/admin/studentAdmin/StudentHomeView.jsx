import React from 'react'
import Container from '../../../components/common/Container'
import { FaEdit, FaUser } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'

const StudentHomeView = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Formazione SEVESO',
      category: 'IN CORSO',
      image: '/image/mandatory_courses/image1.jpg',
      progress: 75,
      buttonText: 'Riprendi',
      buttonVariant: 'primary'
    },
    {
      id: 2,
      title: 'Formazione generale',
      category: 'COMPLETATO',
      image: '/image/mandatory_courses/image2.jpg',
      progress: 100,
      buttonText: 'Scarica attestato',
      buttonVariant: 'primary'
    },
    {
      id: 3,
      title: 'Password Security',
      category: 'NON ANCORA INIZIATO',
      image: '/image/mandatory_courses/image3.jpg',
      progress: 0,
      buttonText: 'Inizia corso',
      buttonVariant: 'primary'
    }
  ]

  return (
    <Container className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 items-stretch">
        {/* Left side - Main content (2/3 width) */}
        <div className="lg:col-span-3 space-y-6 h-full flex flex-col">
          {/* Hero Banner */}
          <div className="relative w-full bg-gradient-to-br from-[#73BFA1] to-[#5aa687] rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-8 right-16 text-6xl opacity-20">✨</div>
            <div className="absolute bottom-6 right-32 text-5xl opacity-10">✨</div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Affina le tue competenze professionali
              </h1>

              <button
                type="button"
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-md"
              >
                Inizia ora
              </button>
            </div>
          </div>

          {/* Course Cards Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Continua il tuo viaggio di apprendimento
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <span className="text-gray-600">‹</span>
                </button>
                <button
                  type="button"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <span className="text-gray-600">›</span>
                </button>
              </div>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                  {/* Course Image */}
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Course+Image'
                      }}
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                    >
                      <span className="text-gray-600">♡</span>
                    </button>
                  </div>

                  {/* Course Content */}
                  <div className="p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                      {course.category}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {course.title}
                    </h3>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#73BFA1] h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      className="w-full bg-[#73BFA1] hover:bg-[#5aa687] text-white py-2.5 rounded-full font-medium transition"
                    >
                      {course.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Profile Panel (1/3 width) */}
        <div className="lg:col-span-1 h-full">
          <div className="top-6 h-full flex">
            <div className="bg-white rounded-2xl shadow-md p-6 w-full h-full flex flex-col items-center">
              {/* Header: title and edit icon side-by-side, centered */}
              <div className="flex  justify-between gap-2 mb-6">
                <h3 className="text-base font-medium text-gray-700">Il tuo profilo</h3>
                <button type="button" className="p-1 rounded hover:bg-gray-100">
                  <FaEdit className="text-sm text-gray-700" />
                </button>
              </div>

              {/* Circular Progress / Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  {/* Outer progress ring */}
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#73BFA1"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset="110"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>

                  {/* Center avatar circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="  text-[#73BFA1] ">
                      <FaUser className="h-18 w-18" />

                      {/* Badge counter positioned relative to inner avatar (overlaps like design) */}
                      <div className="absolute right-6 bottom-10 bg-white rounded-full p-1 shadow-md">
                        <div className="w-7 h-7 rounded-full bg-[#73BFA1] text-white flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Greeting text */}
                <p className="text-lg font-semibold text-gray-800 mb-4">Ciao Prashant</p>

                {/* Profile button */}
                <button
                  type="button"
                  className="w-full bg-[#73BFA1] hover:bg-[#5aa687] text-white px-6 py-3 rounded-full font-medium transition transform hover:scale-105 shadow-md"
                >
                  Il tuo profilo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default StudentHomeView
