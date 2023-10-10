import { createContext } from "react";

interface ThemeContextProps {
  toggleTheme: () => void;
  theme: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  theme: "light",
});
