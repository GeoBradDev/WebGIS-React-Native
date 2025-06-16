import { create } from 'zustand';

interface MapState {
    region: any;
    setRegion: (region: any) => void;
}

export const useMapStore = create<MapState>((set) => ({
    region: null,
    setRegion: (region) => set({ region }),
}));
