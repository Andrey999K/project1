import { Button, Table } from "antd";
import { mockData } from "./mockData.js";
import { TableEmpty } from "../../components/TableEmpty.jsx";

export const Inventory = () => {
  const columns = [
    {
      dataIndex: "id",
      key: "id",
      width: 200,
    },
    {
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      dataIndex: "count",
      key: "count",
      width: 200,
    },
    {
      dataIndex: "cost",
      key: "cost",
    },
    {
      dataIndex: "price",
      key: "price",
      render: (text, record) => record.count * record.cost,
    },
  ];

  const columns2 = [
    {
      title: "п/п",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Наименование",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Кол-во",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Стоимость",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Цена",
      dataIndex: "",
      key: "price",
      render: (text, record) => record.count * record.cost,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <Button type="primary">Создать новый документ</Button>
        <Button type="primary">Сохранить в Excel</Button>
        <Button type="primary">Сохранить в pdf</Button>
        <Button type="primary">Сохранить в Word</Button>
      </div>
      <div>
        <TableEmpty
          columns={[
            { title: <div className="text-center">Техническое оснащение</div> },
          ]}
        />
        <TableEmpty
          columns={[
            { title: <div className="text-center">п/п</div> },
            { title: <div className="text-center">Наименование</div> },
            { title: <div className="text-center">Кол-во</div> },
            { title: <div className="text-center">Стоимость</div> },
            { title: <div className="text-center">Цена</div> },
          ]}
        />
        <TableEmpty
          columns={[{ title: <div className="text-center">Камеры</div> }]}
        />
        <Table
          columns={columns}
          dataSource={mockData.category.items}
          pagination={mockData.category.items.length > 10}
          className="table-without-titles"
          bordered
        />
        <TableEmpty
          columns={[{ title: <div className="text-center">Оптика</div> }]}
        />
        <Table
          columns={columns}
          dataSource={mockData.optics.items}
          pagination={mockData.optics.items.length > 10}
          className="table-without-titles"
          bordered
        />
      </div>
    </div>
  );
};
