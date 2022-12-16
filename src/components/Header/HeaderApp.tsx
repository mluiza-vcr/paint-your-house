import { Switch } from "antd";
import useTheme from "../../hooks/useTheme";
import logoLightMode from "../../assets/images/logo.png";
import logoDarkMode from "../../assets/images/logo-darkmode.png";

function HeaderApp(): JSX.Element {
  const { setCurrentTheme, currentTheme } = useTheme();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={currentTheme === "light" ? logoLightMode : logoDarkMode}
          width="250px"
        />
        <Switch
          checkedChildren="🌞"
          unCheckedChildren="🌙"
          onChange={(value) => setCurrentTheme(value ? "dark" : "light")}
        />
      </div>
    </>
  );
}

export default HeaderApp;
