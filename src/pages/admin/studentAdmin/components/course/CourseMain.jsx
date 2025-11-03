import React from 'react'
import Card from '../../../../../components/ui/layouts/Card'
import { Heading, Paragraph } from '../../../../../components/ui'
import { Play, Volume2, Settings, ExternalLink, Maximize2 } from 'lucide-react'

const CourseMain = ({ course }) => {
    return (
        <div>
            <Card>
                <div className="relative rounded-lg overflow-hidden bg-black">
                    <img src={course.video} alt={course.title} className="w-full h-64 object-cover" />

                    {/* centered play button overlay */}
                    <button
                        aria-label="Play video"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"
                    >
                        <Play className="text-[#73BFA1]" size={28} />
                    </button>

                    {/* progress bar */}
                    <div className="absolute bottom-16 left-6 right-6">
                        <div className="h-1 bg-white/30 rounded-full">
                            <div className="h-1 bg-[#73BFA1] rounded-full" style={{ width: '28%' }} />
                        </div>
                    </div>

                    {/* controls row */}
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">00:01</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-white/90">
                                <Volume2 size={18} />
                            </button>

                            <div className="w-20 h-1 bg-white/30 rounded-full relative">
                                <div className="absolute left-1/4 top-[-4px]">
                                    <div className="w-2 h-2 bg-white rounded-full shadow" />
                                </div>
                            </div>

                            <button className="text-white/90">
                                <Settings size={18} />
                            </button>

                            <button className="text-white/90">
                                <ExternalLink size={18} />
                            </button>

                            <button className="text-white/90">
                                <Maximize2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="mt-6">
                <Heading level={4} className="mb-2">
                    <span className="font-semibold">Video:</span>{' '}
                    <span className="font-normal">What is Seveso Training</span>
                </Heading>
                <Paragraph className="text-sm leading-relaxed text-gray-600">
                    {course.description}
                </Paragraph>
            </div>
        </div>
    )
}

export default CourseMain
