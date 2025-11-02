import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPencilAlt, FaHome, FaUser, FaUserEdit, FaKey, FaShieldAlt, FaDownload, FaListAlt, FaEye, FaSignOutAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { LuArrowLeftToLine } from 'react-icons/lu'
import { FiEdit } from 'react-icons/fi'

const StudentIPofile = () => {
    const menu = [
        { id: 1, icon: <FaHome />, label: 'Home' },
        { id: 2, icon: <IoSettingsSharp />, label: 'Modifica informazioni personali' },
        { id: 3, icon: <FaKey />, label: 'Nuove credenziali ricevute' },
        { id: 4, icon: <FaShieldAlt />, label: 'Privacy & policy' },
        { id: 5, icon: <FaDownload />, label: 'I tuoi attestati' },
        { id: 6, icon: <FaListAlt />, label: "Elenco dei certificati" },
        { id: 7, icon: <LuArrowLeftToLine />, label: 'Anteprima / Dettagli' },
    ]

    const navigate = useNavigate()

    const handleBack = () => {
        // navigate back to previous page in history
        navigate(-1)
    }

    return (
        <div className="p-6 md:p-10">
            {/* Back button */}
            <div className="mb-6">
                <button
                    onClick={handleBack}
                    aria-label="Go back"
                    title="Go back"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm hover:bg-gray-50"
                >
                    <FaChevronLeft className="text-gray-600" />
                </button>
            </div>

            {/* Banner */}
            <div className="bg-[#73BFA1] rounded-xl px-6 py-8 md:px-8 md:py-12 mb-6 relative overflow-hidden">
                {/* edit icon top-right */}
                <button className="absolute  right-20 top-12 p-2 ">
                    <FiEdit className="text-white text-3xl" />
                </button>

                <div className="flex px-18 items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-36 h-36 rounded-full bg-[#73BFA1] flex items-center justify-center border border-white/40 relative">
                            {/* avatar circle matching screenshot */}
                            <div className="w-24 h-24 rounded-full flex items-center justify-center">
                                <span className="sr-only">User avatar</span>
                                <FaUser className="text-[#17342e] h-16 w-16" aria-hidden="true" />
                            </div>

                            {/* small notification badge overlapping bottom-right */}
                            <div className="absolute bottom-8 right-3">
                                <div className="w-10 h-10 rounded-full  bg-[#73BFA1] flex items-center justify-center">
                                    <div className="w-9 h-9 rounded-full bg-[#17342e] flex items-center justify-center text-xl  text-white font-semibold">1</div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-10'>
                            <h2 className="text-3xl md:text-4xl mb-0 font-semibold text-white">Starriz.Clo</h2>
                            <p className="text-xl text-white">starriz.clo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Options list card */}
            <div className="bg-white rounded-xl shadow p-4 md:p-6">
                <div className="space-y-3">
                    {menu.map((item) => (
                        <button
                            key={item.id}
                            className="w-full flex items-center justify-between rounded-lg px-6 py-5 border border-gray-100 hover:shadow-sm transition"
                        >
                            <div className="flex items-center gap-5 text-gray-700">
                                <div className="w-10 h-10 flex items-center justify-center text-gray-600 text-2xl">{item.icon}</div>
                                <span className="text-lg md:text-xl font-medium text-[#252525]">{item.label}</span>
                            </div>

                            <FaChevronRight className="text-[#1A1A1A] text-lg" />
                        </button>
                    ))}

                    <div className="mt-4">
                        <button className="w-full text-xl text-red-600 border border-red-50 rounded-lg px-4 py-3 text-left flex items-center">
                            <IoIosLogOut className='inline-block h-5 w-5 mr-3' />
                            Esci
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentIPofile