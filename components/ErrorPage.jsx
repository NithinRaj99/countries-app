import React from "react";
import styles from "./ErrorPage.module.css";
export default function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Oops! Page Not Found</h2>
      <p className={styles.errorDescription}>
        The page you are looking for doesn't exist or an error occurred. Please
        try again later.
      </p>
      <a href="/" className={styles.errorLink}>
        Go Back Home
      </a>
    </div>
  );
}
