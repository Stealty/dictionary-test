import create from 'zustand';

export const useCredential = create((set) => ({
  credential: '',
  register: () =>
    set((state: { register: string }) => ({ credential: state?.register })),
}));

export function setCredential(payload: string) {
  const register = useCredential(() => payload);

  return register;
}
