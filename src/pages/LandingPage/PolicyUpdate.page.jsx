import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Typography, Form } from "antd";
import ProCard from "@ant-design/pro-card";

import { Row, Button, Input, message, Col, Select, Descriptions } from "antd";
import UserLayoutLayout from "../../layouts/UserLayout.layout";

const { Option } = Select;
// const hostLink = "http://localhost:3000";
const hostLink = "https://insurance-backend-avinash.herokuapp.com";

const { Title } = Typography;
const PolicyUpdate = () => {
  const { id } = useParams();
  const [form] = Form.useForm();

  const [policyDetails, setPolicyDetails] = useState({});
  useEffect(() => {
    fetch(`${hostLink}/policy/policyId/${id}`, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result[0]);
        setPolicyDetails(result[0]);
        form.setFieldsValue(result[0]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const onFinish = (values) => {
    const key = "updatable";
    message.loading({ content: "Updating...", key });
    if (values.premium > 1000000) {
      return message.error({
        content: "Premium should be less than 1 Million",
        key,
        duration: 2,
      });
    }
    const modifiedData = {
      ...values,
      customer_id: policyDetails.customer_id,
    };
    console.log(modifiedData);
    fetch(`${hostLink}/policy/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Result", result);
        message.success({ content: "Updated Successfully!", key, duration: 2 });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <UserLayoutLayout>
      <ProCard.Group
        title={<Title level={2}>{`Update Policy`}</Title>}
        bordered
        style={{ padding: "15px" }}
      >
        <ProCard
          bordered
          title={<Title level={3}>{`User Details`}</Title>}
          style={{
            backgroundColor: "white",
            padding: "15px",
          }}
        >
          <Divider />
          <Descriptions>
            <Descriptions.Item label="User ID">
              {policyDetails?.customer_id?.id}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {policyDetails?.customer_id?.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Income">
              {policyDetails?.customer_id?.income}
            </Descriptions.Item>
            <Descriptions.Item label="Marital Status">
              {policyDetails?.customer_id?.marital_status}
            </Descriptions.Item>
            <Descriptions.Item label="region">
              {policyDetails?.customer_id?.region}
            </Descriptions.Item>
          </Descriptions>
        </ProCard>
        <Divider />
        <ProCard
          title={<Title level={3}>{`Policy Details `}</Title>}
          bordered
          style={{
            backgroundColor: "white",
            padding: "15px",
            minHeight: "30vh",
          }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            name="control-ref"
            layout="vertical"
          >
            <Divider />
            <Row>
              <Col span={8} offset={1}>
                <Form.Item name="id" label="Policy ID" required>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col span={8} offset={2}>
                <Form.Item
                  name="date_of_purchase"
                  label="Date of Purchase"
                  required
                >
                  <Input disabled />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={1}>
                <Form.Item
                  name="collision"
                  label="Collision"
                  rules={[
                    { required: true, message: "Collision cannot be empty" },
                  ]}
                >
                  <Select>
                    <Option value={1}>Yes</Option>
                    <Option value={0}>No</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8} offset={2}>
                <Form.Item
                  name="comprehensive"
                  label="Comprehensive"
                  rules={[
                    {
                      required: true,
                      message: "Comprehensive cannot be empty",
                    },
                  ]}
                >
                  <Select>
                    <Option value={1}>Yes</Option>
                    <Option value={0}>No</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={1}>
                <Form.Item
                  name="bodily_injury_liability"
                  label="Bodily injury liability"
                  rules={[
                    {
                      required: true,
                      message: "Bodily injury liability cannot be empty",
                    },
                  ]}
                >
                  <Select>
                    <Option value={1}>Yes</Option>
                    <Option value={0}>No</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8} offset={2}>
                <Form.Item
                  name="personal_injury_protection"
                  label="Personal injury protection"
                  rules={[
                    {
                      required: true,
                      message: "Personal injury protection cannot be empty",
                    },
                  ]}
                >
                  <Select>
                    <Option value={1}>Yes</Option>
                    <Option value={0}>No</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={1}>
                <Form.Item
                  name="fuel"
                  label="Fuel"
                  rules={[
                    { required: true, message: "Input Fuel cannot be empty" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8} offset={2}>
                <Form.Item
                  name="vechile_segment"
                  label="Vechile Segment"
                  rules={[
                    {
                      required: true,
                      message: "Vechile Segment cannot be empty",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={1}>
                <Form.Item
                  name="property_damage_liability"
                  label="Property damage eliability"
                  rules={[
                    {
                      required: true,
                      message: "Property damage eliability cannot be empty",
                    },
                  ]}
                >
                  <Select>
                    <Option value={1}>Yes</Option>
                    <Option value={0}>No</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8} offset={2}>
                <Form.Item
                  name="premium"
                  label="Premium"
                  rules={[
                    {
                      required: true,
                      message: "premium cannot be empty",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col offset={1}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </ProCard>
      </ProCard.Group>
    </UserLayoutLayout>
  );
};

export default PolicyUpdate;
