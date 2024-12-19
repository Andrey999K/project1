import React from "react";
import { Table } from "antd";

export const TableWithoutTitles = ({ data, columns }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={data.length > 10}
      className="table-without-titles"
      bordered
      rowKey={record => record.id}
    />
  );
};