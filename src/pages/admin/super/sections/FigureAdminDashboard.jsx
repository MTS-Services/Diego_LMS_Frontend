import React from 'react';
import FigurePrevisteDashboard from '../components/FigurePrevisteDashboard';
import TrainingProjectManagerSection from '../components/TrainingProjectManagerSection';

export default function FigureAdminDashboard() {
  return (
    <div className="space-y-6">
      {/* top block: figure previste + access info */}
      <FigurePrevisteDashboard />

      {/* second block: responsabile del progetto di formazione */}
      <TrainingProjectManagerSection />
    </div>
  );
}
