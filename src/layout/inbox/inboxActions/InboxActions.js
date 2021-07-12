import styles from "./InboxActions.module.css";
import InboxControls from "./InboxControls";
import InboxSearch from "./InboxSearch";

const InboxActions = () => (
  <div className={styles.container}>
    <InboxSearch />
    <InboxControls />
  </div>
);

export default InboxActions;
