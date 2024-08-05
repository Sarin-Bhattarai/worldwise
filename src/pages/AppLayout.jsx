import styles from "./AppLayout.module.css";
import Map from "../components/Extras/Map";
import Sidebar from "../components/Extras/Sidebar";
import User from "../components/Extras/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
