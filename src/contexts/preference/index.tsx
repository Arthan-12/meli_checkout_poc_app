import { createContext, ReactNode, useContext, useState } from 'react';

export interface Preference {
  preferenceId: string;
  initPoint: string;
}

interface PreferenceContextType {
  preference: Preference | null;
  setPreference: (preference: Preference) => void;
  clearPreference: () => void;
}

const PreferenceContext = createContext<PreferenceContextType | undefined>(
  undefined
);

export function PreferenceProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<Preference | null>(null);

  function setPreference(preference: Preference) {
    setPreferenceState(preference);
  }

  function clearPreference() {
    setPreferenceState(null);
  }

  return (
    <PreferenceContext.Provider
      value={{ preference, setPreference, clearPreference }}
    >
      {children}
    </PreferenceContext.Provider>
  );
}

export function usePreference() {
  const context = useContext(PreferenceContext);

  if (!context) {
    throw new Error('usePreference must be used within a PreferenceProvider');
  }

  return context;
}
