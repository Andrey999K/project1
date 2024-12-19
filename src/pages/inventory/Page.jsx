import { Button, Input } from "antd";
import { mockData, otherParams } from "./mockData.js";
import { TableEmpty } from "../../components/TableEmpty.jsx";
import { InputNumber } from "../../components/InputNumber.jsx";
import { TableWithoutTitles } from "../../components/TableWIthoutTitles.jsx";
import { EngineeringAssistanceTable } from "../../components/EngineeringAssistanceTable.jsx";

export const Inventory = () => {
  const columns = [
    {
      dataIndex: "id",
      key: "id",
      width: 200,
      render: (text, record) => <InputNumber defaultValue={record.id} />,
    },
    {
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (text, record) => <Input defaultValue={record.name} />,
    },
    {
      dataIndex: "count",
      key: "count",
      width: 200,
      render: (text, record) => <InputNumber defaultValue={record.count} />,
    },
    {
      dataIndex: "cost",
      key: "cost",
      render: (text, record) => <InputNumber defaultValue={record.cost} />,
    },
    {
      dataIndex: "price",
      key: "price",
      width: 200,
      render: (text, record) => record.count * record.cost,
    },
  ];

  // const columns2 = [
  //   {
  //     title: "п/п",
  //     dataIndex: "id",
  //     key: "id",
  //     width: 200,
  //   },
  //   {
  //     title: "Наименование",
  //     dataIndex: "name",
  //     key: "name",
  //     width: 200,
  //   },
  //   {
  //     title: "Кол-во",
  //     dataIndex: "count",
  //     key: "count",
  //     width: 200,
  //   },
  //   {
  //     title: "Стоимость",
  //     dataIndex: "cost",
  //     key: "cost",
  //   },
  //   {
  //     title: "Цена",
  //     dataIndex: "",
  //     key: "price",
  //     width: 200,
  //     render: (text, record) => record.count * record.cost,
  //   },
  // ];

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
          rowKey={record => record.title}
        />
        <TableEmpty
          columns={[
            { title: <div className="text-center">п/п</div> },
            { title: <div className="text-center">Наименование</div> },
            { title: <div className="text-center">Кол-во</div> },
            { title: <div className="text-center">Стоимость</div> },
            { title: <div className="text-center">Цена</div> },
          ]}
          rowKey={record => record.id}
        />
        <TableEmpty
          columns={[{ title: <div className="text-center">Камеры</div> }]}
          rowKey={record => record.title}
        />
        <TableWithoutTitles columns={columns} data={mockData.category.items} />
        <TableEmpty
          columns={[{ title: <div className="text-center">Оптика</div> }]}
          rowKey={record => record.title}
        />
        <TableWithoutTitles columns={columns} data={mockData.optics.items} />
        <div className="max-w-[424px] ml-auto">
          <TableWithoutTitles
            columns={[
              {
                dataIndex: "name",
                key: "name"
              },
              {
                dataIndex: "value",
                key: "value",
                width: 200,
                render: (text, record, index) => index === 3
                  ? <InputNumber defaultValue={record.value} />
                  : text
              }
            ]}
            data={otherParams}
          />
        </div>
      </div>
      <EngineeringAssistanceTable />
    </div>
  );
};
