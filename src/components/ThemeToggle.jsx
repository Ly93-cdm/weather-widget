import React from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

function ThemeToggle({ theme, setTheme }) {
    const isDark = theme === "dark";
    const buttonClass = `theme-toggle ${isDark ? "theme-dark" : "theme-light"}`;
    return (
        <button 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={buttonClass}
        >
            {isDark ? <Sun size={64}/> : <Moon size={64}/>}
        </button>
    );
}

export default ThemeToggle;