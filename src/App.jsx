import "./App.css";
import { createContext, useState } from "react";
import Home from "./Home";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Home theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
