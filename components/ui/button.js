import React from "react";
import styles from "./Button.module.css";

export function Button({ children, onClick, href, className = "", ...props }) {
  if (href) {
    return (
      <a href={href} className={`${styles.button} ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
