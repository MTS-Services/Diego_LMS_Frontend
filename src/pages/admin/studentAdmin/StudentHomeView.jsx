import React from 'react'
import Container from '../../../components/common/Container'
import LeftContent from './components/LeftContent'
import ProfileSidebar from './components/ProfileSidebar'

const StudentHomeView = () => {
  return (
    <Container className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 items-stretch">
        {/* Left side - Main content (3/4 width) */}
        <div className="lg:col-span-3 space-y-6 h-full flex flex-col">
          <LeftContent />
        </div>

        {/* Right side - Profile Panel (1/3 width) */}
        {/* Right side - Profile Panel (1/4 width) */}
        <div className="lg:col-span-1 h-full">
          <ProfileSidebar />
        </div>
      </div>
    </Container>
  )
}

export default StudentHomeView
