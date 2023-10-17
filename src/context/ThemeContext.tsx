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
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
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
