import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Typography, Form, Row, Col, Select, message } from "antd";
import ProCard from "@ant-design/pro-card";
import { Line } from "@ant-design/plots";
import UserLayoutLayout from "../../layouts/UserLayout.layout";

const { Title } = Typography;
const { Option } = Select;
// const hostLink = "http://localhost:3000";
const hostLink = "https://insurance-backend-avinash.herokuapp.com";
const key = "updatable";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [region, setRegion] = useState("all");

  useEffect(() => {
    message.loading({ content: "Loading data...", key });
    form.setFieldsValue({ region: region });
    asyncFetch();
  }, [region]);
  const asyncFetch = () => {
    fetch(`${hostLink}/policy/policies/${region}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        message.success({ content: "Success!", key, duration: 2 });
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 6,
    },
  };
  const onChange = (value) => {
    console.log(value);
    setRegion(value);
  };
  return (
    <UserLayoutLayout>
      <ProCard.Group
        title={<Title level={2}>Dashboard</Title>}
        bordered
        style={{ padding: "15px" }}
      >
        <ProCard
          title={<Title level={3}>Select region</Title>}
          bordered
          style={{
            backgroundColor: "white",
            padding: "15px",
            minHeight: "10vh",
          }}
        >
          <Form form={form} name="control-ref" layout="vertical">
            <Divider />
            <Row>
              <Col span={10} offset={1}>
                <Form.Item name="region" label="Region" required>
                  <Select onChange={onChange}>
                    <Option value={"all"}>All</Option>
                    <Option value={"east"}>East</Option>
                    <Option value={"west"}>West</Option>
                    <Option value={"north"}>North</Option>
                    <Option value={"south"}>South</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </ProCard>
        <Divider />
        <ProCard
          title={<Title level={3}>{`Line Chart`}</Title>}
          bordered
          style={{
            backgroundColor: "white",
            padding: "15px",
            minHeight: "60vh",
          }}
        >
          <Line {...config} />
        </ProCard>
      </ProCard.Group>
    </UserLayoutLayout>
  );
};
export default Dashboard;
