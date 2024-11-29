import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  email: string | null;
  setEmail: (email: string) => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      email: null,
      setEmail: (email) => set({ email }),
    }),
    {
      name: 'userEmail',
    },
  ),
);
