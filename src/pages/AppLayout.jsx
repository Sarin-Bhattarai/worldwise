import styles from "./AppLayout.module.css";
import Map from "../components/Extras/Map";
import Sidebar from "../components/Extras/Sidebar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
