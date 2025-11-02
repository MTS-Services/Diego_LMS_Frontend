import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUIStore = create(
  persist(
    (set) => ({
      isOpen: true, // default open
      activeLink: '',
      isToggle: () => set((state) => ({ isOpen: !state.isOpen })),
      setActiveLink: (path) => set({ activeLink: path }),
    }),
    { name: 'ui-storage' },
  ),
);
