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
} from "antd";

import React from "react";
const { Option } = Select;
const onFinish = (values) => {
  console.log(values);
};

const SearchPolicy = () => {
  const [form] = Form.useForm();
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
