import { createContext, useEffect, useState } from "react";

interface ThemeProviderType {
  children: JSX.Element;
}
export interface ThemeContextTypes {
  theme: string;
  setTheme: (theme: string) => void;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext<ThemeContextTypes>({
  theme: "",
  setTheme: () => "",
});

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const checkTheme = (existing: string) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);

    localStorage.setItem("current-theme", existing);
  };

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
