import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default App;
