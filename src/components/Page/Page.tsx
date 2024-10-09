import { FC, PropsWithChildren } from "react";
import { Main } from "../Main/Main";
import { Menu } from "../Menu/Menu";
import styles from "../Main/Main.module.css";

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${styles.pageBg} flex`}>
      <Menu />
      <Main>{children}</Main>
    </div>
  );
};
