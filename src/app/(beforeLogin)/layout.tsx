import React from "react";
import styles from "@/app/page.module.css";
type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
