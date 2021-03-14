import React, { ReactElement, useState } from 'react';
import { Layout, Menu, Avatar, Space } from 'antd';
import {
  AppstoreOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { RenderRoutes } from '@/router/RenderRoutes';
const { Header, Sider, Content } = Layout;

const Dashboard = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout
      style={{
        height: '100vh',
      }}>
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={toggle}>
        <Space
          align="center"
          className="logo"
          style={{
            height: 64,
            padding: 16,
          }}>
          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          <span>Athena</span>
        </Space>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            应用管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          <Router>{RenderRoutes(routes)}</Router>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
