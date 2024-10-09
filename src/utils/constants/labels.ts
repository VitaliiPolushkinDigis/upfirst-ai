import { Routes } from "./navigation";

interface IMenuItems {
  title: string;
  link: string;
}

export const menuItems: IMenuItems[] = [
  {
    title: "menu.home",
    link: Routes.Home,
  },
  {
    title: "menu.about",
    link: Routes.AboutUs,
  },
  {
    title: "menu.contact",
    link: Routes.Contact,
  },
];
