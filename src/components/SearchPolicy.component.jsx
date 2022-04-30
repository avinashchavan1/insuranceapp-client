import ProCard from "@ant-design/pro-card";
import {
  Divider,
  Row,
  Switch,
  Typography,
  Col,
  Badge,
  Form,
  Select,
  Button,
  Input,
  message,
} from "antd";

import React, { useState } from "react";
const { Option } = Select;

const SearchPolicy = ({ policyHandler }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    const hostLink = "http://localhost:3000";
    const resourceLink = `/policy/${values.IdType}/${values.id}`;
    const targetLink = hostLink + resourceLink;
    fetch(targetLink, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          message.success({ content: "Loaded!", key, duration: 2 });
        } else {
          message.error({ content: "User not found!", key, duration: 2 });
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        policyHandler(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log(targetLink);
  };
  return (
    <Form form={form} onFinish={onFinish} name="control-ref">
      <Divider />

      <Row>
        <Col span={8} offset={1}>
          <Form.Item
            hasFeedback
            name="IdType"
            label="Select ID Type"
            rules={[{ required: true, message: "Select ID Type" }]}
          >
            <Select placeholder="Select Type">
              <Option value="policyId">Policy Id</Option>
              <Option value="userId">User Id</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8} offset={1}>
          <Form.Item
            name="id"
            label="ID Number"
            rules={[{ required: true, message: "ID cannot be empty" }]}
          >
            <Input placeholder="Input ID" allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col offset={1}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchPolicy;
