import { FC, PropsWithChildren } from "react";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Main.module.css";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`flex flex-col min-h-screen ${styles.calcWidth}`}>
      <Header />
      <section className={`p-12 overflow-y-auto ${styles.contentWrapper}`}>
        {children}
      </section>
      <Footer />
    </div>
  );
};
