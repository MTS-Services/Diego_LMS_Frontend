import React from 'react'
import { FaCheckCircle, FaPlayCircle, FaRegCircle } from 'react-icons/fa'
import { Card, Heading } from '../../../../../components/ui'

const CourseProgram = ({ modules = [], progress = 0 }) => {
    return (
        <aside>
            <div className="p-0">
                <div className="rounded-t-xl overflow-hidden">
                    <div className="bg-[#F1FBF7] p-4">
                        <Heading level={5} className="text-base">Corso</Heading>
                    </div>
                    <div className="bg-[#17342e] text-white px-4 py-3 flex items-center justify-between">
                        <div className="font-medium">Programma del corso</div>
                        <div className="text-sm">{progress}% avanzamento</div>
                    </div>
                </div>

                <div className="p-4 bg-green-50">
                    <ul className="space-y-3">
                        {modules.map((item) => (
                            <li
                                key={item.id}
                                className={`flex items-center justify-between p-4 rounded-md ${item.status === 'current' ? 'bg-[#eef9f4] border-l-4 border-l-[#73BFA1]' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div>
                                        {item.status === 'done' && (
                                            <div className="w-8 h-8 rounded-full bg-[#E8F8F3] text-[#0b6c50] flex items-center justify-center">
                                                <FaCheckCircle />
                                            </div>
                                        )}

                                        {item.status === 'current' && (
                                            <div className="w-8 h-8 rounded-full bg-white border border-[#DFF5EA] text-[#73BFA1] flex items-center justify-center">
                                                <FaPlayCircle />
                                            </div>
                                        )}

                                        {item.status === 'upcoming' && (
                                            <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center">
                                                <FaRegCircle />
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-sm text-[#252525]">{item.title}</div>
                                </div>

                                <div className="text-sm text-gray-500">{item.time}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default CourseProgram
