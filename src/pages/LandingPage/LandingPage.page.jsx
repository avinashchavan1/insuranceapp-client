import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Layout, Menu, Result, Typography } from "antd";
import ProCard from "@ant-design/pro-card";
import SearchPolicy from "../../components/SearchPolicy.component";
import ResultPolicies from "../../components/ResultPolicies.component";
import { useNavigate } from "react-router-dom";
const { Header, Footer } = Layout;
const menuItems = [
  { label: "Home", href: "/", key: "1" },
  { label: "Dashboard", href: "/dashboard", key: "2" },
];
const { Title } = Typography;
export default () => {
  const [policies, setPolicies] = useState([]);
  const policyHandler = (policies) => {
    setPolicies(policies);
    console.log("from landing page");
  };
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

      <ProCard.Group
        title={<Title level={2}>Search Policy</Title>}
        bordered
        style={{ padding: "15px" }}
      >
        <ProCard
          title={<Title level={3}>Find Policies by ID</Title>}
          bordered
          style={{
            backgroundColor: "white",
            padding: "15px",
            minHeight: "30vh",
          }}
        >
          <SearchPolicy policyHandler={policyHandler} />
        </ProCard>
        <Divider />
        <ProCard
          title={<Title level={3}>Results</Title>}
          bordered
          style={{
            backgroundColor: "white",
            padding: "15px",
            minHeight: "30vh",
          }}
        >
          <ResultPolicies policies={policies} />
        </ProCard>
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
};
