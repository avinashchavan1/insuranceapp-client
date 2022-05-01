import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Footer } = Layout;

export default (props) => {
  const navigate = useNavigate();
  const clickHandler = (event) => {
    console.log("clicked", event.key);
    navigate(event.key);
  };
  const menuItems = [
    { label: "Home", key: "/", onClick: clickHandler, value: "/" },
    {
      label: "Dashboard",
      key: "/dashboard",
      onClick: clickHandler,
      value: "/dashboard",
    },
  ];
  return (
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
          defaultSelectedKeys={["/"]}
          items={menuItems}
        />
      </Header>
      <Divider />

      {props.children}
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
};
