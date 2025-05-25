import { create } from 'zustand'

interface AppState {
  isLoading: boolean
  sessionToken: string | null
  setSessionToken: (token: string | null) => void
  setIsLoading: (value: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  sessionToken: null,
  setSessionToken: (token) => set({ sessionToken: token }),
  setIsLoading: (value) => set({ isLoading: value }),
}))
