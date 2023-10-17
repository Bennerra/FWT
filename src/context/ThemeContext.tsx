import {
  FC,
  createContext,
  HTMLAttributes,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";

import { getStorageValue } from "../utils/getStorageValue";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentStorageTheme = getStorageValue("theme", "light");
    setTheme(currentStorageTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  }, [theme]);

  const contextValue = useMemo(
    () => ({ toggleTheme, theme }),
    [toggleTheme, theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
