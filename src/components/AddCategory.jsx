import { Button, Input } from "antd";

export const AddCategory = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">Добавить категорию</h3>
      <div className="flex gap-5 items-center">
        <Input />
        <Button type="primary">Добавить</Button>
      </div>
    </div>
  );
};
