"use client";

import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react";

interface ThemeContextState {
  theme: "light" | "dark";
  changeTheme: (theme: ThemeContextState['theme']) => void;
}

export const ThemeContext = createContext<ThemeContextState | null>(null);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeContextState['theme']>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const bodyEl = document.querySelector("body");
    if (!bodyEl) return;
    bodyEl.classList.remove(theme === 'dark' ? "light" : "dark");
    bodyEl.classList.add(theme === 'dark' ? "dark" : "light");
  }, [theme])

  const changeTheme = useCallback((theme: ThemeContextState['theme']) => {
    setTheme(theme);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}