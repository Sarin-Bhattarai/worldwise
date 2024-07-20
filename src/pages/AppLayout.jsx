import AppNav from "../components/Header/AppNav";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
    </div>
  );
}

export default AppLayout;
