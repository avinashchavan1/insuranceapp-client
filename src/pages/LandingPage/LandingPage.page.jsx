import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Layout, Menu, Result, Typography } from "antd";
import ProCard from "@ant-design/pro-card";
import SearchPolicy from "../../components/SearchPolicy.component";
const { Header, Content, Footer } = Layout;
const menuItems = ["Home", "Dashboard"];
const { Title } = Typography;

export default () => (
  <Layout>
    <Header
      style={{
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems.map((ele, index) => ({
          key: String(index + 1),
          label: ele,
        }))}
      />
    </Header>
    <Divider />

    <ProCard.Group
      title={<Title level={2}>Search Policy</Title>}
      bordered
      style={{ padding: "15px" }}
    >
      <ProCard
        title={<Title level={3}>Find Policies IDs</Title>}
        bordered
        style={{ backgroundColor: "white", padding: "15px", minHeight: "30vh" }}
      >
        <SearchPolicy />
      </ProCard>
      <Divider />
      {/* <ProCard
        title={<Title level={3}>Search Policy</Title>}
        bordered
        style={{ backgroundColor: "white", padding: "15px" }}
      >
        <Result></Result>
      </ProCard>
      <Divider /> */}
    </ProCard.Group>
    <Divider />

    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Insurance Analytics ©2022 Created by Avinash Chavan
    </Footer>
  </Layout>
);
