import {
  Button,
  theme,
  Switch,
  Input,
  Checkbox,
  Typography,
  ConfigProvider,
} from "antd";
import { AliasToken } from "antd/es/theme/internal";
import { useState } from "react";

const { useToken } = theme;

function ComponentTest({ setCurrentTheme }: any) {
  const { token } = useToken();
  return (
    <div
      style={{
        margin: 0,
        background: token.colorBgContainer,
        height: "100%",
      }}
    >
      <div>
        <Switch
          checkedChildren="🌞"
          unCheckedChildren="🌙"
          onChange={(value) => setCurrentTheme(value ? "dark" : "light")}
        />

        <Typography>TESTE TEXTO</Typography>
        <Button type="primary">Botão</Button>
        <Checkbox>Radio button</Checkbox>
        <Input />
      </div>
    </div>
  );
}

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const themes: { [key: string]: Partial<AliasToken> } = {
    light: { colorPrimary: "#19438C", colorPrimaryBg: "#fafafa" },
    dark: {
      colorPrimary: "#007dc3",
      colorBgContainer: "#252525",
    },
  };

  return (
    <ConfigProvider
      theme={{
        token: themes[currentTheme],
        components: {
          Input: {
            colorBgContainer: currentTheme === "light" ? "" : "red",
          },
        },
        algorithm:
          currentTheme === "light"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
      }}
    >
      <ComponentTest setCurrentTheme={setCurrentTheme} />
    </ConfigProvider>
  );
}

export default App;
