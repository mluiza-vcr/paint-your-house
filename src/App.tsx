import { theme, ConfigProvider, Layout } from "antd";
import { AliasToken } from "antd/es/theme/internal";
import { Router } from "./routes/Router";
import useTheme from "./hooks/useTheme";

function App() {
  const { currentTheme } = useTheme();

  const themes: { [key: string]: Partial<AliasToken> } = {
    light: {
      colorPrimary: "#ff66c4",
      colorBgBase: "#fff4e6",
      fontSize: 16,
      borderRadius: 4,
      colorTextBase: "#3a3a3a",
    },
    dark: {
      colorPrimary: "#7ed957",
      colorBgBase: "#3A3A3A",
      fontSize: 16,
      borderRadius: 4,
      colorBgContainer: "#252525",
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
