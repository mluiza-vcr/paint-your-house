import { Layout, Switch, theme } from "antd";
import useTheme from "../../hooks/useTheme";
import logoLightMode from "../../assets/images/logo.png";
import logoDarkMode from "../../assets/images/logo-darkmode.png";
import {
  ContentStyle,
  CustomButton,
  FooterStyle,
  HeaderStyle,
  LayoutStyle,
} from "./layout-style";

function LayoutApp({ children }: any): JSX.Element {
  const { setCurrentTheme, currentTheme } = useTheme();
  const { Header, Footer, Content } = Layout;
  const {
    token: { colorBgBase, colorPrimary },
  } = theme.useToken();

  return (
    <Layout style={LayoutStyle()}>
      <Header style={HeaderStyle(colorBgBase)}>
        <img
          src={currentTheme === "light" ? logoLightMode : logoDarkMode}
          height="100%"
          width="200px"
        />
        <Switch
          checkedChildren="🌞"
          unCheckedChildren="🌙"
          onChange={(value) => setCurrentTheme(value ? "dark" : "light")}
        />
      </Header>
      <Content style={ContentStyle(colorBgBase)}>
        {children}
        <CustomButton
          css={{ backgroundColor: colorPrimary, $$hover: colorBgBase }}
        />
      </Content>
      <Footer style={FooterStyle(colorPrimary)}>
        Desenvolvido por <a href="https://github.com/mluiza-vcr">mluiza-vcr</a>
      </Footer>
    </Layout>
  );
}

export default LayoutApp;
