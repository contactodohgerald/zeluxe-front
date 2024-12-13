import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  isAuthenticated: boolean;
  categoryFilter: string[];
  setCategoryFilter: (val: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
  setIsAuthenticated: (val: boolean) => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      isAuthenticated: false,
      categoryFilter: [''],
      email: null,
      setEmail: (email) => set({ email }),
      setIsAuthenticated: (val) => set({ isAuthenticated: val }),
      setCategoryFilter: (val) =>
        set((state) => ({ categoryFilter: [...state.categoryFilter, val] })),
    }),
    {
      name: 'userEmail',
    },
  ),
);
