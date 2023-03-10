import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React from 'react';


  const { Header, Content, Footer, Sider } = Layout;


  function getItem(label, key, icon, children, link) {
    return {
      key,
      icon,
      children,
      label,
      link,
    };
  }

  const topItems = [
    {
      label: 'Top Menu',
      key: '1',
      children: [
        getItem('top 1', '2', <UserOutlined />)
      ]
    },
    getItem('Meetings', '3', <VideoCameraOutlined />),
    getItem('Fitness Goals', '4', <AppstoreOutlined />)
  ];
  

  const items = [
    getItem('Profile', '1', < UserOutlined />, undefined, '/profile'),
    getItem('Meetings', '2', <VideoCameraOutlined />),
    getItem('Online Friends', 'sub1', <UploadOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Purchases', 'sub2', <BarChartOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Workouts', '9', <CloudOutlined />),
    getItem('Fitness Goals', '123', <AppstoreOutlined/>),
    getItem('Nutrition Stats', '123', <TeamOutlined/>),
    getItem('Nutrition Shops', '123', <ShopOutlined/>),
  ];

  const MainPage = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={topItems}>
              {topItems.map(item =>
                item.children ? (
                  <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                    {item.children.map(child => (
                      <Menu.Item key={child.key} icon={child.icon}>
                        {child.label}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                  </Menu.Item>
                )
              )}
            </Menu>
        </Header>
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial',
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
              }}
            >
              <p>long content</p>
              {
                // indicates very long content
                Array.from(
                  {
                    length: 100,
                  },
                  (_, index) => (
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index ? 'more' : '...'}
                      <br />
                    </React.Fragment>
                  ),
                )
              }
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            AQDesigns 2023
          </Footer>
        </Layout>
      </Layout>
    );
  };

  export default MainPage;