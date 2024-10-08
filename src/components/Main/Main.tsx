import { FC, PropsWithChildren } from "react";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Header />
      <section className="flex-1 p-4"> {children}</section>
      <Footer />
    </main>
  );
};
