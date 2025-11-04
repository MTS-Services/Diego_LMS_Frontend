import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// shared layout + pages
import SettingsLayout from '../components/SettingsLayout';
import FinanceSettings from '../components/FinanceSettings';
import SystemSettings from '../components/SystemSettings';
import BrandSettings from '../components/BrandSettings';
import ApiSettings from '../components/ApiSettings';

export default function AdminSettingsDashboard() {
  const handleSave = () => {
    console.log('save settings');
  };

  return (
    <SettingsLayout onSave={handleSave}>
      <Routes>
        <Route index element={<Navigate to="finance" replace />} />
        <Route path="finance" element={<FinanceSettings />} />
        <Route path="system" element={<SystemSettings />} />
        <Route path="brand" element={<BrandSettings />} />
        <Route path="api" element={<ApiSettings />} />
        {/* Fallback: redirect to finance if unknown */}
        <Route path="*" element={<Navigate to="finance" replace />} />
      </Routes>
    </SettingsLayout>
  );
}
