import React from 'react'
import Card from '../../../components/ui/layouts/Card'
import { Heading, Paragraph } from '../../../components/ui'
import { Bell } from 'lucide-react'
import { FaChevronLeft } from 'react-icons/fa'

const sampleNotifications = [
    {
        id: 1,
        title: 'Hai un nuovo corso da frequentare',
        message: 'Inizia il tuo corso di formazione! Il team UnoSicurezza',
        time: '5 min ago',
        unread: true,
    },
    {
        id: 2,
        title: 'Nessuna attività nelle ultime 48 ore',
        message: 'La crescita professionale non si ferma qui!',
        time: '10 min ago',
        unread: false,
    },
    {
        id: 3,
        title: 'Hai un nuovo corso da frequentare',
        message: 'Inizia il tuo corso di formazione! Il team UnoSicurezza',
        time: '5 min ago',
        unread: true,
    },
]

const NotificationItem = ({ item }) => (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.unread ? 'bg-[#F1F9F6]' : 'bg-white'}`}>
                <Bell className="text-[#73BFA1]" size={16} />
            </div>

            <div className="min-w-0">
                <h4 className="text-xl font-semibold text-[#252525]">{item.title}</h4>
                <Paragraph className="text-base text-gray-400">{item.message}</Paragraph>
            </div>
        </div>

        <div className="flex flex-col items-end ml-4">
            <span className="text-xs text-gray-400">{item.time}</span>
            {item.unread && <span className="w-2.5 h-2.5 bg-[#73BFA1] rounded-full mt-2" />}
        </div>
    </div>
)

const NotificationsView = () => {
    return (
        <div className="p-6 md:p-10">
            <div className="max-w-5xl mx-auto relative">
                {/* top row: small back button left, action right */}
                <div className="flex items-center justify-between mb-6">
                    <button className="w-8 h-8 rounded-full bg-[#F1F9F6] flex items-center justify-center shadow-sm">
                        <FaChevronLeft className="text-gray-600" />
                    </button>

                    <button className="text-[#73BFA1] text-xl  font-semibold">Segna tutti come già letti</button>
                </div>

                <div className="space-y-4">
                    {sampleNotifications.map((n) => (
                        <NotificationItem key={n.id} item={n} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NotificationsView
