import {
  createContext,
  ProviderProps,
  SetStateAction,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext({} as IProviderContext);

export interface IProviderContext {
  currentTheme: string;
  setCurrentTheme: SetStateAction<any>;
}

interface IThemeProvider {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: IThemeProvider) {
  const [currentTheme, setCurrentTheme] = useState("light");

  const providerValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme, setCurrentTheme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}
