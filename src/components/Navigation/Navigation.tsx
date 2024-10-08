import { useTranslation } from "react-i18next";
import { menuItems } from "../../constants/labels";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { t } = useTranslation();
  const items = menuItems.map((item, index) => (
    <li key={index} className="p-1">
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-blue-500 py-2 px-3 rounded-lg min-w-full w-full block"
            : "text-zinc-800 py-2 px-3 rounded-lg font-medium min-w-full w-full block"
        }
      >
        {t(item.title)}
      </NavLink>
    </li>
  ));
  return (
    <nav className="w-100 rounded-lg">
      <ul>{items}</ul>
    </nav>
  );
};
