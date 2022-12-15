import { theme, ConfigProvider } from "antd";
import { AliasToken } from "antd/es/theme/internal";

import { Router } from "./routes/Router";
import useTheme from "./hooks/useTheme";

function App() {
  const { currentTheme } = useTheme();

  const themes: { [key: string]: Partial<AliasToken> } = {
    light: {
      colorPrimary: "#ff66c4",
      colorBgContainer: "#FFF4E6",
      colorBgBase: "#FFF4E6",
      borderRadius: 13,
      colorTextBase: "#3a3a3a",
    },
    dark: {
      colorPrimary: "#7ed957",
      borderRadius: 13,
      colorBgContainer: "#252525",
      colorBgBase: "#333333",
    },
  };

  return (
    <ConfigProvider
      theme={{
        token: themes[currentTheme],
        algorithm:
          currentTheme === "light"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
