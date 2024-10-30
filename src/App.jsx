import { useState, useEffect } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme, Button } from "@mui/material";

function getMode() {
  return JSON.parse(localStorage.getItem("mode"));
}

function App() {
  const [darkMode, setDarkMode] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
      },
      background: {
        default: darkMode ? "#121212" : "#ffffff",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} darkMode={darkMode} />

      <TodoList />
    </ThemeProvider>
  );
}

export default App;
