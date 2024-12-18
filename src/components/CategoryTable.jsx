import { Button, Input, Table } from "antd";
import { InputNumber } from "./InputNumber.jsx";
import { DeleteFilled } from "@ant-design/icons";
import { useState } from "react";
import { BindItemModal } from "./BindItemModal.jsx";

export const CategoryTable = ({ data }) => {
  const [items, setItems] = useState(data);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Стоимость",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <InputNumber defaultValue={record.price} />,
    },
    {
      title: "",
      dataIndex: "",
      key: "action",
      render: (text, record) => (
        <button
          type="primary"
          className="text-red-500"
          onClick={() => handleDelete(record.id)}
        >
          <DeleteFilled />
        </button>
      ),
    },
  ];

  if (data.length && "binding" in data[0]) {
    columns.splice(2, 0, {
      title: "Привязка",
      dataIndex: "binding",
      key: "binding",
      render: (text, record) => <BindItemModal data={record} />,
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <Table
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.id}
        pagination={items.length > 10}
      />
      <div className="flex items-center gap-3">
        <Input placeholder="Название" />
        <InputNumber placeholder="Стоимость" />
        <Button>Добавить</Button>
      </div>
    </div>
  );
};
