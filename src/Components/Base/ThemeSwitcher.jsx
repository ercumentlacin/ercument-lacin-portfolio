import React, { useContext } from "react";

import ThemeContext from "../../Context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="theme-change fixed-top">
      <button
        type="button"
        className={`btn btn-${theme}`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <span>☀️</span> : <span>🌙</span>}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
