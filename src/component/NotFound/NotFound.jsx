import React from "react";
import styles from "./NotFound.module.scss";
export default function NotFound() {
  return (
    <h1 className={styles.NotFound}>
      <span>😕</span>
      <p>Ничего не найдено</p>
    </h1>
  );
}
