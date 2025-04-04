import React from "react";
import styles from "./Progress.module.css";

export function Progress({ value, className = "" }) {
  return (
    <div className={`${styles.progressContainer} ${className}`}>
      <div
        className={styles.progressBar}
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
