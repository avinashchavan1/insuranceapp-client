import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Typography } from "antd";
import ProCard from "@ant-design/pro-card";
import SearchPolicy from "../../components/SearchPolicy.component";
import ResultPolicies from "../../components/ResultPolicies.component";
import UserLayoutLayout from "../../layouts/UserLayout.layout";

const { Title } = Typography;
export default () => {
  const [policies, setPolicies] = useState([]);
  const policyHandler = (policies) => {
    const addKeys = policies.map((ele, i) => {
      const newKeyElement = { ...ele, key: i };
      return newKeyElement;
    });
    setPolicies(addKeys);
    console.log("updating policies state from landing page");
  };

  return (
    <UserLayoutLayout>
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
    </UserLayoutLayout>
  );
};
