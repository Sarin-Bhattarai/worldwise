import styles from "./Page404.module.css";

export default function Page404() {
  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <h1>Page not found 😢</h1>
        <img src="/404.png" alt="404 pic" />
      </div>
    </div>
  );
}
