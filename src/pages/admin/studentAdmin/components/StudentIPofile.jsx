import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaUser, FaKey, FaShieldAlt, FaDownload, FaListAlt, FaChevronRight, FaChevronLeft, FaBell } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { LuArrowLeftToLine } from 'react-icons/lu'
import { FiEdit } from 'react-icons/fi'
import StudentInfoModal from './modal/StudentInfoModal'
import rightDownSideBg from '/image/student/ciao.png'

const StudentIPofile = () => {
    const menu = [
        { id: 1, icon: <FaHome />, label: 'Home' },
        { id: 2, icon: <IoSettingsSharp />, label: 'Modifica informazioni personali' },
        { id: 3, icon: <FaKey />, label: 'Nuove credenziali ricevute' },
        { id: 4, icon: <FaShieldAlt />, label: 'Privacy & policy' },
        { id: 5, icon: <FaDownload />, label: 'I tuoi attestati' },
        { id: 6, icon: <FaListAlt />, label: "Elenco dei certificati" },
        { id: 7, icon: <LuArrowLeftToLine />, label: 'Anteprima / Dettagli' },
        { id: 8, icon: <FaBell />, label: 'Notifiche' },
    ]

    const navigate = useNavigate()
    const [showInfoModal, setShowInfoModal] = useState(false)

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
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F1F9F6] shadow-sm hover:bg-gray-50"
                >
                    <FaChevronLeft className="text-gray-600" />
                </button>
            </div>
            {/* Banner */}
            <div className="relative  mb-10 h-44 w-full overflow-hidden rounded-2xl bg-[#73BFA1] text-white md:h-48">

                {/* Content layer - tightened spacing to match design */}
                <div className="flex items-center gap-6 px-6 md:px-10 h-full">
                    <div className="flex items-center gap-6">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#73BFA1] flex items-center justify-center border border-white/30 relative">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center">
                                <span className="sr-only">User avatar</span>
                                <FaUser className="text-[#17342e] h-12 w-12 md:h-16 md:w-16" aria-hidden="true" />
                            </div>

                            {/* small notification badge overlapping bottom-right - scaled for tighter layout */}
                            <div className="absolute bottom-8 right-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#73BFA1] flex items-center justify-center">
                                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#17342e] flex items-center justify-center text-xs md:text-xl text-white font-semibold">1</div>
                                </div>
                            </div>
                        </div>

                        <div className='ml-4'>
                            <h2 className="text-2xl md:text-4xl mb-0 font-semibold text-white">Starriz.Clo</h2>
                            <p className="text-sm md:text-xl text-white">starriz.clo</p>
                        </div>
                    </div>
                </div>
                {/* Edit icon (top-right) - green outlined square matching design; opens StudentInfoModal */}
                <button
                    onClick={() => setShowInfoModal(true)}
                    aria-label="Edit profile"
                    title="Edit profile"
                    className="absolute top-4 right-8 md:top-6 md:right-38 z-10 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center "
                >
                    <FiEdit className="text-white text-3xl" />
                </button>

                {/* Background layer */}
                <div className='absolute z-0 -right-20 top-9'>
                    <img src={rightDownSideBg} alt="circleBg" />
                </div>
            </div>

            {/* Options list card */}
            <div className="bg-white rounded-xl border border-[#E6E6E6] shadow p-4 md:p-6">
                <div className="space-y-3">
                    {menu.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                // open the user's StudentInfoModal when the second menu item is clicked
                                if (item.id === 2) {
                                    setShowInfoModal(true)
                                    return
                                }

                                // open the 'Nuove credenziali ricevute' page
                                if (item.id === 3) {
                                    navigate('/dash/student/credentials')
                                    return
                                }

                                // navigate to certificate page
                                if (item.id === 6) {
                                    navigate('/dash/level-four/attestati')
                                    return
                                }

                                // navigate to notifications
                                if (item.id === 8) {
                                    navigate('/dash/notifications')
                                    return
                                }

                                // fallback: for other items, we could navigate or perform actions
                            }}
                            className="w-full flex items-center justify-between rounded-lg px-4 py-3 border border-[#E6E6E6] hover:shadow-sm transition"
                            aria-label={item.label}
                        >
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="w-8 h-8 flex items-center justify-center text-gray-600 text-lg">{item.icon}</div>
                                <span className="text-base md:text-lg font-medium text-[#252525]">{item.label}</span>
                            </div>

                            <FaChevronRight className="text-[#1A1A1A] text-sm" />
                        </button>
                    ))}

                    <div className="mt-4">
                        <button className="w-full text-lg text-red-600 border border-[#E6E6E6] rounded-lg px-5 py-2 text-left flex items-center">
                            <IoIosLogOut className='inline-block h-5 w-5 mr-3' />
                            Esci
                        </button>
                    </div>
                </div>
            </div>
            {/* Render user's StudentInfoModal when requested */}
            {showInfoModal && (
                <StudentInfoModal onClose={() => setShowInfoModal(false)} />
            )}
        </div>
    )
}

export default StudentIPofile