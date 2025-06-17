import React, { createContext, useContext, ReactNode } from "react";
import colors, {
  darkColors,
  accentColors,
  uiColors,
  textColors,
} from "@/lib/colors";

// Define the theme colors and constants
const theme = {
  colors,
  gradients: {
    blueToPurple: "linear-gradient(90deg, #00E8F8 0%, #7A47E0 100%)",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  spacing: {
    container: {
      px: {
        mobile: "1rem",
        tablet: "2rem",
        desktop: "4rem",
      },
      maxWidth: "1512px",
    },
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};

// Create the theme context
type ThemeContextType = typeof theme;
const ThemeContext = createContext<ThemeContextType>(theme);

// Theme provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// Theme provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
