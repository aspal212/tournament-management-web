import { create } from 'zustand';

export const useStore = create((set) => ({
  tournaments: [],
  addTournament: (t) => set((state) => ({ tournaments: [...state.tournaments, t] })),
}));
