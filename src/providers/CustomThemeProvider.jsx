import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalStyle, darkTheme, lightTheme } from "../Global.styled";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default CustomThemeProvider;
