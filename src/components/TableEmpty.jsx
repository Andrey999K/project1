import { Table } from "antd";

export const TableEmpty = ({ columns }) => {
  return (
    <Table
      columns={columns}
      bordered
      locale={{ emptyText: null }}
      className="table-empty"
    />
  );
};
