import { Layout, theme } from "antd";
import HeaderApp from "../Header";
import { styled } from "@stitches/react";

function LayoutApp({ children }: any): JSX.Element {
  const { Header, Footer, Content } = Layout;
  const {
    token: { colorBgBase, colorPrimary },
  } = theme.useToken();

  const CustomButton = styled("button", {
    backgroundColor: `${colorPrimary}`,
    color: "white",
    padding: "10px 15px",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  });

  return (
    <Layout>
      <Header
        className="header"
        style={{
          background: colorBgBase,
          height: "22vh",
        }}
      >
        <HeaderApp />
      </Header>
      <Layout>
        <Content style={{ height: "100vh", background: colorBgBase }}>
          {children}
          <CustomButton>Botão custom</CustomButton>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutApp;
