import React from "react";
import { TableEmpty } from "./TableEmpty.jsx";
import { Input, Table } from "antd";
import { engineeringAssistanceMockData } from "../pages/inventory/mockData.js";
import { InputNumber } from "./InputNumber.jsx";

export const EngineeringAssistanceTable = () => {

  const columns = [
    {
      title: "п/п",
      dataIndex: "id",
      key: "id",
      width: 200,
      render: (text, record) => <InputNumber defaultValue={record.id} />,
    },
    {
      title: "Наименование",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (text, record) => <Input defaultValue={record.name} />,
    },
    {
      title: "Кол-во",
      dataIndex: "count",
      key: "count",
      width: 200,
      render: (text, record) => <InputNumber defaultValue={record.count} />,
    },
    {
      title: "Стоимость",
      dataIndex: "cost",
      key: "cost",
      render: (text, record) => <InputNumber defaultValue={record.cost} />,
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
      width: 200,
      render: (text, record) => record.count * record.cost
    },
  ]

  return (
    <div>
      <TableEmpty
        columns={[
          { title: <div className="text-center">Инженерное сопровождение</div> }
        ]}
      />
      <Table
        columns={columns}
        dataSource={engineeringAssistanceMockData}
        pagination={engineeringAssistanceMockData.length > 10}
      />
    </div>
  );
};
