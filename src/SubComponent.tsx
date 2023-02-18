import React from "react";
import { ThemeContext } from "./App";

export const SubComponent = () => {
  const { theme, useTheme } = React.useContext(ThemeContext);

  return (
    <>
      <button onClick={() => useTheme(theme === "light" ? "dark" : "light")}>
        toggle
      </button>
      <p>{theme}</p>
    </>
  );
};
