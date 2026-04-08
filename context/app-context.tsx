import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type AppLanguage = 'fr' | 'ar';
export type UserRole = 'producteur' | 'valorisateur' | 'transporteur' | null;

type AppContextValue = {
  language: AppLanguage | null;
  setLanguage: (lang: AppLanguage) => void;
  role: UserRole;
  setRole: (role: Exclude<UserRole, null>) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<AppLanguage | null>(null);
  const [role, setRole] = useState<UserRole>(null);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      role,
      setRole,
    }),
    [language, role]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
}
