import styled, { css } from "styled-components";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, Typography, Card, Input, Select, DatePicker, Space, Button, Table, Row } from "antd";
import { AppstoreOutlined, CalendarOutlined, MailOutlined } from "@ant-design/icons";

// project import
import { logoIcon, alertIcon, avatarIcon, selectIcon, settingIcon, homeIcon } from "src/images";
import { LinkStyled, TextStyled, IconStyled } from "src/components/styled";
import { lightColorsTheme } from "src/styles/themes/lightTheme";

import type { MenuProps, MenuTheme } from "antd/es/menu";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem("Navigation Two", "sub1", <AppstoreOutlined />)
];

const MainLayout: React.FC = () => {
  return (
    <MainLayoutStyled>
      <HeaderStyled>
        <div>
          <LinkStyled to={"/"}>
            <IconStyled src={logoIcon} alt={"logoIcon"} style={{ width: "160px", marginTop: "-5px" }} />
          </LinkStyled>
        </div>
        <div>
          <Space size={20}>
            <LinkStyled to={"#"}>
              <Space direction={"horizontal"}>
                <IconStyled src={avatarIcon} alt={"avatarIcon"} />
                <TextStyled style={{ whiteSpace: "nowrap" }}>Admin ICON</TextStyled>
                <IconStyled src={selectIcon} alt={"selectIcon"} />
              </Space>
            </LinkStyled>
            <LinkStyled to={"#"}>
              <IconStyled src={alertIcon} alt={"alertIcon"} />
            </LinkStyled>
            <LinkStyled to={"#"}>
              <IconStyled src={settingIcon} alt={"settingIcon"} />
            </LinkStyled>
          </Space>
        </div>
      </HeaderStyled>
      <LayoutStyled>
        <Layout.Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          trigger={null}
          width={270}
          style={{ background: lightColorsTheme.background }}
        >
          <CardStyled>
            <LinkStyled to={"#"}>
              <IconStyled src={homeIcon} alt={"homeIcon"} style={{ width: "110px" }} />
            </LinkStyled>
          </CardStyled>
          <MenuStyled mode="inline" defaultSelectedKeys={["1"]} items={items} />
        </Layout.Sider>
        <Layout.Content style={{ background: lightColorsTheme.background, paddingLeft: "24px" }}>
          <Outlet />
        </Layout.Content>
      </LayoutStyled>
    </MainLayoutStyled>
  );
};

export default MainLayout;

const MainLayoutStyled = styled(Layout)`
  height: 100vh;
`;
const HeaderStyled = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-image: linear-gradient(90deg, #415da7 0%, #7573be 100%);
  width: 100%;
`;

const LayoutStyled = styled(Layout)`
  height: 100%;
  background: var(--background-color);
  padding: 32px 24px 0px 24px;
`;

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 16px;
  border-radius: 50px;
  margin-bottom: 16px;
  background: #dee7ed;
`;

const MenuStyled = styled(Menu)`
  background: var(--white);
  padding: 8px;
  border-radius: 10px;

  :where(.css-dev-only-do-not-override-1e3x2xa).ant-menu-inline.ant-menu-root {
    box-shadow: 0px 0px 32px rgba(136, 152, 170, 0.15);
  }

  :where(.css-dev-only-do-not-override-1e3x2xa).ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: 0;
  }
`;

const LayoutContentStyled = styled(Layout.Content)`
  height: 100%;
  background: var(--background-color);
  padding: 32px 24px 0px 24px;
`;
