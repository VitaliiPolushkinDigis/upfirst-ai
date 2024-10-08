import { FC, PropsWithChildren } from "react";
import { Main } from "../Main/Main";
import { Menu } from "../Menu/Menu";

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
    </>
  );
};
