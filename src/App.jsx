import "./App.css";
import { createContext, useState } from "react";
import Home from "./page/Home";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="app" id={theme}>
        <Home theme={theme} toggleTheme={toggleTheme} />
      </main>
    </ThemeContext.Provider>
  );
};
export default App;
