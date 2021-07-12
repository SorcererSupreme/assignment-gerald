import styles from "./App.module.css";
import Inbox from "./layout/inbox/Inbox";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Inbox />
    </div>
  );
}

export default App;
