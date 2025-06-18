import { create } from 'zustand';

interface MapState {
    region: string;
    setRegion: (region: string) => void;
}

export const useMapStore = create<MapState>((set) => ({
    region: '',
    setRegion: (region: string) => set({ region }),
}));
