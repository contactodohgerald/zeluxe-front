import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  isAuthenticated: boolean;
  email: string | null;
  setEmail: (email: string) => void;
  setIsAuthenticated: (val: boolean) => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      isAuthenticated: false,
      email: null,
      setEmail: (email) => set({ email }),
      setIsAuthenticated: (val) => set({ isAuthenticated: val }),
    }),
    {
      name: 'userEmail',
    },
  ),
);
