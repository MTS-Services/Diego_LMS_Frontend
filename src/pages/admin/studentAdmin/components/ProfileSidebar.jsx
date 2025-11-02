import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEdit, FaUser } from 'react-icons/fa'

const ProfileSidebar = () => {
    const navigate = useNavigate()

    const openProfilePage = () => {
        // navigate to the student profile page registered at /dash/student/profile
        navigate('/dash/student/profile')
    }

    return (
        <div className="top-6 h-full flex">
            <div className="bg-white rounded-2xl shadow-md p-6 w-full h-full flex flex-col items-center">
                <div className="flex justify-between gap-2 mb-6 w-full">
                    <h3 className="text-base font-medium text-gray-700">Il tuo profilo</h3>
                    <button type="button" className="p-1 rounded hover:bg-gray-100">
                        <FaEdit className="text-sm text-gray-700" />
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                        <svg className="w-40 h-40 transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                            <circle cx="80" cy="80" r="70" stroke="#73BFA1" strokeWidth="8" fill="none" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" className="transition-all duration-500" />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24  text-[#73BFA1] flex items-center justify-center ">
                                <FaUser className="h-16 w-16" />
                            </div>
                        </div>

                        <div className="absolute top-1/2 right-8 bottom-24 transform -translate-y-1/2 z-20">
                            <div className="w-8 h-8 rounded-full bg-[#73BFA1] text-white flex items-center justify-center text-sm font-semibold ring-2 ring-white shadow-md">1</div>
                        </div>
                    </div>

                    <p className="text-lg font-semibold text-gray-800 mb-4">Ciao Prashant</p>

                    <button
                        type="button"
                        onClick={openProfilePage}
                        className="w-full bg-[#73BFA1] hover:bg-[#5aa687] text-white px-6 py-3 rounded-full font-medium transition transform hover:scale-105 shadow-md"
                    >
                        Il tuo profilo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar
