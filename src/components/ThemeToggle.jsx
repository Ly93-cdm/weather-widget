import React from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle({ theme, settheme }) {
    return (
        <button 
            onClick={() => settheme(theme === "dark" ? "light" : "dark")}
            style={{
                marginBottom: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                background: theme === "dark" ? "#333" : "#ddd",
                color: theme === "dark" ? "#fff" : "#000",
                border: "none",
                cursor: "pointer"
            }}
        >
             {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}

export default ThemeToggle;