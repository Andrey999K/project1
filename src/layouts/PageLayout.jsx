import { NavLink, Outlet } from "react-router-dom";
import { Routes } from "../utils/routesConfig.js";

const pages = [
  {
    title: "Главная",
    href: Routes.HOME,
  },
  {
    title: "Инвентарь",
    href: Routes.INVENTORY,
  },
];

export const PageLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="p-5 flex items-center justify-center border-b-[1px] border-solid border-gray-200">
        <div className="flex items-center gap-5 w-full max-w-screen-lg">
          {pages.map((page, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              to={page.href}
              key={page.href}
            >
              {page.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-5 w-full max-w-screen-lg m-auto pb-40">
        <Outlet />
      </div>
    </div>
  );
};
