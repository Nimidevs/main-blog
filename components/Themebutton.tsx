

"use client";

import { useEffect, useState } from "react";
import { GoMoon } from "react-icons/go";
import { FiSun } from "react-icons/fi";

const Themebutton = () => {
  const [theme, setTheme] = useState("light"); // Default theme during SSR

  // Fetch theme from localStorage after mounting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  // Apply the theme to the document and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="border-none outline-none bg-none flex">
      <span
        className={`p-3 rounded-lg text-xl ${
          theme === "light"
            ? "bg-thickgreen text-white"
            : "bg-transparent text-thickgreen"
        }`}
      >
        <FiSun />
      </span>
      <span
        className={`p-3 rounded-lg text-xl ${
          theme === "dark"
            ? "bg-thickgreen text-white"
            : "bg-transparent text-thickgreen"
        }`}
      >
        <GoMoon />
      </span>
    </button>
  );
};

export default Themebutton;


