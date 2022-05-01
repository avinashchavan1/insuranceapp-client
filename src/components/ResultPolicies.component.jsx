import React from "react";
import "antd/dist/antd.css";
import { Table, Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
// const hostLink = "http://localhost:3000";
const hostLink = "https://insurance-backend-avinash.herokuapp.com";

const setupData = (dataRaw) => {
  let datasessions = dataRaw;
  // console.log(dataRaw);
  if (datasessions === undefined) return {};

  datasessions = datasessions.map((ele, i) => {
    return { ...ele, key: i };
  });
  const data = datasessions;
  const areaSet = new Set();
  const typeSet = new Set();
  const feeSet = new Set();
  const convertToFilterData = (data) => {
    let result = [];
    data.forEach((element) => result.push({ text: element, value: element }));
    return result;
  };

  data.forEach((element) => {
    //console.log(element);
    areaSet.add(element["block_name"]);
    typeSet.add(element["vaccine"]);
    feeSet.add(element["fee"]);
  });

  const areaFilter = convertToFilterData(areaSet);
  const typeFilter = convertToFilterData(typeSet);
  const feeFilter = convertToFilterData(feeSet);
  return { areaFilter, typeFilter, feeFilter, data };
};

class ResultPolicies extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    // console.log(filters);

    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
    // console.log(this.state);
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setPriceSort = () => {
    this.setState({
      sortedInfo: {
        order: "ascend",
        columnKey: "vaccine",
      },
    });
  };

  render() {
    const { areaFilter, typeFilter, feeFilter, data } = setupData(
      this.props.filteredData
    );

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    // console.log("from render: ", filteredInfo);
    const columns = [
      {
        title: "Policy ID",
        dataIndex: "id",
        key: "id",
        filteredValue: filteredInfo.id || null,
        onFilter: (value, record) => record.id.includes(value),
        sorter: (a, b) => +a.id < +b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order,
        ellipsis: true,
      },

      {
        title: "Premium",
        dataIndex: "premium",
        key: "premium",
        filters: typeFilter,
        filteredValue: filteredInfo.vaccine || null,
        onFilter: (value, record) => record.vaccine.includes(value),
        sorter: (a, b) => a.vaccine < b.vaccine,
        sortOrder: sortedInfo.columnKey === "vaccine" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Date of Purchase",
        dataIndex: "date_of_purchase",
        key: "date_of_purchase",
        sorter: (a, b) => a.available_capacity < b.available_capacity,
        sortOrder:
          sortedInfo.columnKey === "available_capacity" && sortedInfo.order,
        ellipsis: true,
        responsive: ["lg", "md"],
      },
      ,
      {
        title: "Fuel",
        dataIndex: "fuel",
        key: "fuel",
        filters: areaFilter,
        filteredValue: filteredInfo.block_name || null,
        onFilter: (value, record) => record.block_name.includes(value),
        sorter: (a, b) => a.block_name < b.block_name,
        sortOrder: sortedInfo.columnKey === "block_name" && sortedInfo.order,
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
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
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
