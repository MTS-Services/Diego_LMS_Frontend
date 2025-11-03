import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Button } from '../../../components/ui'

const SupportFeedbackView = () => {
    const navigate = useNavigate()
    const [reply, setReply] = useState('')

    // Sample ticket data
    const ticket = {
        id: 'TP-1234',
        subject: 'Access issue - "Functionality is restricted"',
        description: `Dear Sir/Madam,I am experiencing an issue when logging into my hosting account using the email address example@gmail.com. Upon logging in, I receive the following Could you please investigate and resolve this issue as soon as possible?Thank you for your support.Best regards.`,
        details: {
            subject: 'Access issue - "Functionality is restricted"',
            requestType: 'Level-1',
            priority: 'Critical',
            createdAt: '05/04/AAAA 20:44:58',
            assignedTo: 'Jane Cooper'
        },
        conversation: [
            {
                id: 1,
                author: 'Jane Cooper',
                timestamp: '05/04/AAAA 13:32:49',
                message: `Thanks for sharing.  We have shared you full root access to the server.Hope you issue is resolved now.`
            },
            {
                id: 2,
                author: 'Jane Cooper',
                timestamp: '05/04/AAAA 13:32:49',
                message: `Please feel the known the what I am facing when login Attachment:TIcKeT5CJLjpg`
            }
        ]
    }

    const handleSendReply = () => {
        if (!reply.trim()) {
            alert('Inserisci una risposta')
            return
        }
        // TODO: Send reply to backend
        console.log('Reply sent:', reply)
        setReply('')
        alert('Risposta inviata!')
    }

    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                    {/* Header with back button */}
                    <div className="relative flex items-center justify-center mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-0 text-gray-600 hover:text-gray-900 transition"
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-900">Area ticket</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Ticket Description */}
                        <div className="lg:col-span-2">
                            <div className="mb-12 ">
                                <div className="bg-white border-2 border-[#F0F0F0] rounded-lg p-6 relative">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                        Descrizione ticket
                                    </h2>
                                    <p className="text-base text-gray-900 mb-4">Dear Sir/Madam,</p>
                                    <p className="text-base text-gray-900 leading-relaxed whitespace-pre-line">
                                        {ticket.description}
                                    </p>
                                </div>
                            </div>

                            {/* Conversation Section */}
                            <div className="mb-8 border p-8 rounded-lg  border-[#F0F0F0]">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Conversazione
                                </h2>
                                <div className="border-t-2 border-[#F0F0F0]  pt-4" />
                                {/* Timestamp header */}
                                <p className="text-base text-gray-600 mb-4">
                                    Update GG/MM/AAAA 13:32:49
                                </p>

                                <div className="space-y-6">
                                    {ticket.conversation.map((msg) => (
                                        <div key={msg.id} className="flex gap-4">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
                                                    <span className="text-base font-semibold text-white">
                                                        {msg.author.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Message content */}
                                            <div className="flex-1">
                                                <div className="mb-2">
                                                    <p className="text-base font-semibold text-gray-900">
                                                        {msg.author}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {msg.timestamp}
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 rounded-lg p-4">
                                                    <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
                                                        {msg.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reply Section */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Rispondi</h2>
                                <textarea
                                    placeholder="Inserisci la tua risposta..."
                                    value={reply}
                                    onChange={(e) => setReply(e.target.value)}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-[#F6FBF9] border border-[#E5F5ED] rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73BFA1] focus:border-transparent resize-none"
                                />
                                <div className="mt-4 flex justify-end">
                                    <Button
                                        label="Invia"
                                        className="rounded-full bg-[#73BFA1] hover:bg-[#5fa488]"
                                        onClick={handleSendReply}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Ticket Details */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-[#F0F0F0] rounded-lg p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                    Dettagli ticket
                                </h2>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-700 font-medium">ID: <span className="text-gray-900">{ticket.id}</span></p>
                                    </div>
                                    <div>
                                        <p className="text-xl text-[#252525] font-semibold mb-1">Oggetto: <span  className="text-base text-gray-900">{ticket.details.subject}</span></p>
                                        
                                    </div>
                                    <div>
                                        <p className="text-xl text-[#252525] font-semibold mb-1">Tipologia richiesta:</p>
                                        <p className="text-base text-gray-900">
                                            {ticket.details.requestType}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xl text-[#252525] font-semibold mb-1">Priorità:</p>
                                        <p className="text-base text-gray-900">
                                            {ticket.details.priority}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xl text-[#252525] font-semibold mb-1">Creato il:</p>
                                        <p className="text-base text-gray-900">
                                            {ticket.details.createdAt}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xl text-[#252525] font-semibold mb-1">Nominativo:</p>
                                        <p className="text-base text-gray-900">
                                            {ticket.details.assignedTo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportFeedbackView
