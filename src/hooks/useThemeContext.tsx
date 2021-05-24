import React, { useState } from "react";
import { IContextProps, IThemeProps } from "../interface/theme";

type Theme = "light" | "dark";

const ThemeContext = React.createContext<IContextProps>({
  theme: "dark",
});

function ThemeContextProvider({ children }: IThemeProps) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
