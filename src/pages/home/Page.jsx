import { mockData } from "./mockData.js";
import { CategoryTable } from "../../components/CategoryTable.jsx";
import { AddCategory } from "../../components/AddCategory.jsx";

export const Page = () => {
  return (
    <div className="flex flex-col gap-5">
      <CategoryTable data={mockData.cameras} />
      <CategoryTable data={mockData.optics} />
      <AddCategory />
    </div>
  );
};
