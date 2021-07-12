import { useState } from "react";

export const useThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");

      document.getElementById("mainApp").className = "body-dark";
    } else {
      setTheme("light");
      document.getElementById("mainApp").className = "body-light";
    }
  };

  return [theme, toggleTheme];
};
