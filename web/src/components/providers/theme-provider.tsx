"use client";

import { PropsWithChildren, createContext, useCallback, useState } from "react";

interface ThemeContextState {
  theme: "light" | "dark";
  changeTheme: (theme: ThemeContextState['theme']) => void;
}

export const ThemeContext = createContext<ThemeContextState | null>(null);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeContextState['theme']>("light");

  const changeTheme = useCallback((theme: ThemeContextState['theme']) => {
    setTheme(theme);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}