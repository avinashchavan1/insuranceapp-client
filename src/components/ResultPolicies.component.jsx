import React from "react";
import "antd/dist/antd.css";
import { Table, Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
// const hostLink = "http://localhost:3000";
const hostLink = "https://insurance-backend-avinash.herokuapp.com";

class ResultPolicies extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter,
    });
  };

  clearAll = () => {
    this.setState({
      sortedInfo: null,
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Policy ID",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => +a.id < +b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order,
        ellipsis: true,
      },

      {
        title: "Premium",
        dataIndex: "premium",
        key: "premium",
        sorter: (a, b) => +a.premium < +b.premium,
        sortOrder: sortedInfo.columnKey === "premium" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Date of Purchase",
        dataIndex: "date_of_purchase",
        key: "date_of_purchase",

        ellipsis: true,
        responsive: ["lg", "md"],
      },
      ,
      {
        title: "Fuel",
        dataIndex: "fuel",
        key: "fuel",
        ellipsis: true,
        responsive: ["lg", "md"],
      },
      {
        title: "Edit",
        dataIndex: "id",
        key: "id",
        render: (value) => {
          return (
            <Typography.Link
              href={`/policy/policyId/${value}`}
            >{`Edit Policy ${value}`}</Typography.Link>
          );
        },
        ellipsis: true,
      },
    ];

    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button type="dashed" onClick={this.clearAll}>
            Clear sorters
          </Button>
        </Space>
        <Table
          columns={columns}
          dataSource={this.props.policies}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default ResultPolicies;
