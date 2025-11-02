import React, { useState } from 'react'
import Card from '../../../../components/ui/layouts/Card'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const LeftContent = () => {
    const courses = [
        {
            id: 1,
            title: 'Formazione SEVESO',
            category: 'IN CORSO',
            image: '/image/mandatory_courses/image1.jpg',
            progress: 75,
            buttonText: 'Riprendi'
        },
        {
            id: 2,
            title: 'Formazione generale',
            category: 'COMPLETATO',
            image: '/image/mandatory_courses/image2.jpg',
            progress: 100,
            buttonText: 'Scarica attestato'
        },
        {
            id: 3,
            title: 'Formazione generale',
            category: 'COMPLETATO',
            image: '/image/mandatory_courses/image2.jpg',
            progress: 100,
            buttonText: 'Scarica attestato'
        },
        {
            id: 4,
            title: 'Formazione generale',
            category: 'COMPLETATO',
            image: '/image/mandatory_courses/image2.jpg',
            progress: 100,
            buttonText: 'Scarica attestato'
        },
        {
            id: 5,
            title: 'Password Security',
            category: 'NON ANCORA INIZIATO',
            image: '/image/mandatory_courses/image3.jpg',
            progress: 0,
            buttonText: 'Inizia corso'
        }
    ]

    const getCategoryClasses = (category) => {
        switch ((category || '').toUpperCase()) {
            case 'COMPLETATO':
                return 'text-[#05563f] bg-[#F1F9F6]';
            case 'IN CORSO':
                return 'text-[#8a5b00] bg-[#FFF0D9]';
            case 'NON ANCORA INIZIATO':
                return 'text-[#2b7a64] bg-[#E8F8F3]';
            default:
                return 'text-gray-500 bg-gray-100';
        }
    }

    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 3
    const total = courses.length

    const handleNext = () => {
        if (startIndex + visibleCount >= total) return
        const nextIndex = Math.min(startIndex + visibleCount, Math.max(total - visibleCount, 0))
        setStartIndex(nextIndex)
    }

    const handlePrev = () => {
        if (startIndex === 0) return
        const prevIndex = Math.max(startIndex - visibleCount, 0)
        setStartIndex(prevIndex)
    }

    const visibleCourses = courses.slice(startIndex, startIndex + visibleCount)

    return (
        <>
            {/* Hero Banner */}
            <div className="relative w-full bg-gradient-to-br from-[#73BFA1] to-[#5aa687] rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
                <div className="absolute top-8 right-16 text-6xl opacity-20">✨</div>
                <div className="absolute bottom-6 right-32 text-5xl opacity-10">✨</div>

                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Affina le tue competenze professionali
                    </h1>

                    <button
                        type="button"
                        className="bg-[#284338] hover:bg-slate-900 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        Inizia ora
                    </button>
                </div>
            </div>

            {/* Course Cards Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Continua il tuo viaggio di apprendimento</h2>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            aria-disabled={startIndex === 0}
                            className={`w-8 h-8 rounded-full border border-[#9E9E9E] flex items-center justify-center transition ${startIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 text-[#9E9E9E]'}`}>
                            <FaChevronLeft />
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={startIndex + visibleCount >= total}
                            aria-disabled={startIndex + visibleCount >= total}
                            className={`w-8 h-8 rounded-full border border-[#9E9E9E] flex items-center justify-center transition ${startIndex + visibleCount >= total ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 text-[#9E9E9E]'}`}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {visibleCourses.map((course) => (
                        <Card key={course.id} padding="none" shadow="sm" className="overflow-hidden hover:shadow-lg transition">
                            <div className="relative h-48 bg-gray-200">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Course+Image' }}
                                />
                                <button type="button" className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                                    <span className="text-gray-600">♡</span>
                                </button>
                            </div>

                            <div className="p-4">
                                <p className={`text-xs uppercase tracking-wide mb-2 inline-block px-3 py-1 rounded-full ${getCategoryClasses(course.category)}`}>{course.category}</p>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{course.title}</h3>

                                <div className="mb-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#73BFA1] h-2 rounded-full transition-all" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                </div>

                                <button type="button" className="w-full bg-[#73BFA1] hover:bg-[#5aa687] text-white py-2.5 rounded-full font-medium transition">{course.buttonText}</button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LeftContent
