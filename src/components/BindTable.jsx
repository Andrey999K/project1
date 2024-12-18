import { Table } from "antd";
import { InputNumber } from "./InputNumber.jsx";

export const BindTable = ({ data }) => {
  const columns = [
    {
      title: "Камера",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Кол-во",
      dataIndex: "value",
      key: "value",
      render: (text, record) => <InputNumber defaultValue={record.value} />,
    },
  ];

  return (
    <Table
      dataSource={data || []}
      columns={columns}
      pagination={(data || []).length > 10}
      rowKey={(record) => record.id}
    />
  );
};
