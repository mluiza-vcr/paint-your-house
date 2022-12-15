import { useContext } from "react";
import { ThemeContext, IProviderContext } from "../context/themeContext";

function useTheme(): IProviderContext {
  return useContext(ThemeContext);
}

export default useTheme;
