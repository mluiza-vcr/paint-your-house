import React from "react";
import { Layout, Switch, theme } from "antd";
import useTheme from "../../hooks/useTheme";

function LayoutApp({ children }: any): JSX.Element {
  const { setCurrentTheme } = useTheme();

  const { Header, Footer, Content } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ background: colorPrimary }}>
        <Switch
          checkedChildren="🌞"
          unCheckedChildren="🌙"
          onChange={(value) => setCurrentTheme(value ? "dark" : "light")}
        />
      </Header>
      <Layout>
        <Content style={{ height: "100vh" }}>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutApp;
