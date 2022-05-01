import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
const { Header, Footer } = Layout;

export default (props) => {
  const navigate = useNavigate();
  const clickHandler = (event) => {
    const routePath = event.key === undefined ? "/" : event.key;
    console.log("clicked", event.key);
    navigate(routePath);
  };
  const location = useLocation();
  const currentPath = location.pathname === "/dashboard" ? "/dashboard" : "/";
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
        {/* <div className="logo" /> */}
        <a>
          <img
            src="./final-logo.png"
            alt="Logo"
            className="logo"
            onClick={clickHandler}
          ></img>
        </a>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[currentPath]}
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
