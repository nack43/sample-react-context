import "./App.css";

import React from "react";
import { SubComponent } from "./SubComponent";

function App() {
  return (
    <Provider>
      <div className="App">
        <SubComponent />
      </div>
    </Provider>
  );
}

type ContextValue = {
  theme: "dark" | "light";
  useTheme: (theme: "dark" | "light") => void;
};

export const ThemeContext = React.createContext<ContextValue>({
  theme: "dark",
  useTheme: () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [theme, useTheme] = React.useState<ContextValue["theme"]>("dark");

  return (
    <ThemeContext.Provider value={{ theme, useTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default App;
