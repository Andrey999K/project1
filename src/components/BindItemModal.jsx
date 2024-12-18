import { Button, Input, Modal, Select } from "antd";
import { useState } from "react";
import { BindTable } from "./BindTable.jsx";
import { mockData } from "../pages/home/mockData.js";

export const BindItemModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Настройка</Button>
      <Modal
        title={data.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <div className="flex flex-col gap-5">
          <BindTable data={data.binding} />
          <div className="flex gap-3 items-center">
            <Select
              // defaultValue="lucy"
              // onChange={handleChange}
              placeholder="Камера"
              options={mockData.cameras.map((camera) => ({
                value: camera.id,
                label: camera.name,
              }))}
              className="w-full"
            />
            <Input placeholder="Количество" />
            <Button>Добавить</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
