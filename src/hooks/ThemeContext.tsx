import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(() => {
    const root = document.getElementById("mainRoot");
    if (root) {
      return root.classList.contains("dark");
    }
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const root = document.getElementById("mainRoot");
    if (root) {
      if (dark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("darkMode", newTheme ? "true" : "false");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
